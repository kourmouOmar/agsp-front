import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BureauControleService } from 'src/app/services/bureau-controle.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { DetailBureauControleComponent } from '../detail-bureau-controle/detail-bureau-controle.component';

@Component({
  selector: 'app-fiche-bureau-controle',
  templateUrl: './fiche-bureau-controle.component.html',
  styleUrls: ['./fiche-bureau-controle.component.css']
})
export class FicheBureauControleComponent implements OnInit {
  displayedColumns: string[] = ['designation', 'fax', 'nomCompletResponsable','telephoneResponsable', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private  bureauControleService:BureauControleService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {
  }
  ngOnInit(): void {
    this.bureauControleService.getAllBueauControles().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  detailBureauControle(row:any){
      const dialogRef = this.dialog.open(DetailBureauControleComponent,{
        data:{
          bureauControle: row
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
  }
  updateBureauControle(row:any){
    this.router.navigateByUrl('/bureau-controle/update', { state: { bureauControle: row } });
  }

  deleteBureauControle(row:any){
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: "Suppression bureau de contrôle",
        message: "Vous êtes sûr de supprimer bureau de contrôle ?",
        buttonText: {
          ok: 'Valider',
          cancel: 'Annuler'
        }
      },
      panelClass: 'confirmation-popup'
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.bureauControleService.updateBureauControleById(row).subscribe(
          {
            next : () => {
              this._snackBar.open("Suppression avec succes ","Fermer", {
                duration: 10000,
                panelClass: 'oppenSnackBarSuccessClass'
              });
              this.dataSource.data = this.dataSource.data.filter(v=> v.idBureauControle != row.idBureauControle)
            },
            error : () => {
              this._snackBar.open("Impossible de supprime déja lie","Fermer", {
                duration: 10000,
                panelClass: 'oppenSnackBarFailureClass'
              });
            }
          }
        );
      }
    });
  }


}
