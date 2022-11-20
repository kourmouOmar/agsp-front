import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BureauEtudeService } from 'src/app/services/bureau-etude.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { DetailClientComponent } from '../../clients/detail-client/detail-client.component';
import { DetailBureauEtudeComponent } from '../detail-bureau-etude/detail-bureau-etude.component';

@Component({
  selector: 'app-fiche-bureau-etude',
  templateUrl: './fiche-bureau-etude.component.html',
  styleUrls: ['./fiche-bureau-etude.component.css']
})
export class FicheBureauEtudeComponent implements OnInit {
  displayedColumns: string[] = ['designation', 'fax', 'nomCompletResponsable','telephoneResponsable', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private  bureauEtudeService:BureauEtudeService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {
  }
  ngOnInit(): void {
    this.bureauEtudeService.getAllBueauEtudes().subscribe(res => {
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

  detailBureauEtude(row:any){
      const dialogRef = this.dialog.open(DetailBureauEtudeComponent,{
        data:{
          bureauEtude: row
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
  }
  updateBureauEtude(row:any){
    this.router.navigateByUrl('/bureau-etude/update', { state: { bureauEtude: row } });
  }

  deleteBureauEtude(row:any){
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: "Suppression bureau d'étude",
        message: "Vous êtes sûr de supprimer bureau d'étude ?",
        buttonText: {
          ok: 'Valider',
          cancel: 'Annuler'
        }
      },
      panelClass: 'confirmation-popup'
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.bureauEtudeService.deleteBureauEtudeById(row).subscribe(
          {
            next : () => {
              this._snackBar.open("Suppression avec succes ","Fermer", {
                duration: 10000,
                panelClass: 'oppenSnackBarSuccessClass'
              });
              this.dataSource.data = this.dataSource.data.filter(v=> v.idBureauEtude != row.idBureauEtude)
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
