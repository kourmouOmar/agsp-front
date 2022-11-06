import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/module/Client.model';
import { ClientService } from 'src/app/services/client.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { DetailUserComponent } from '../../parametrage/detail-user/detail-user.component';
import { DetailClientComponent } from '../detail-client/detail-client.component';

@Component({
  selector: 'app-fiche-client',
  templateUrl: './fiche-client.component.html',
  styleUrls: ['./fiche-client.component.css']
})
export class FicheClientComponent implements OnInit {
  displayedColumns: string[] = ['designation', 'ice', 'nomCompletContact','telephone', 'action'];
  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private  clientService:ClientService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {
  }
  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(res => {
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

  detailClient(row:any){
      const dialogRef = this.dialog.open(DetailClientComponent,{
        data:{
          client: row
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });

  }
  updateClient(row:any){
    this.router.navigateByUrl('/client/update', { state: { utilisateur: row } });
  }
  deleteClient(row:any){
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: 'Suppression client',
        message: "Vous êtes sûr de supprimer client ?",
        buttonText: {
          ok: 'Valider',
          cancel: 'Annuler'
        }
      },
      panelClass: 'confirmation-popup'
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.clientService.deleteclientrById(row).subscribe(
          {
            next : () => {
              this._snackBar.open("Suppression avec succes ","Fermer", {
                duration: 10000,
                panelClass: 'oppenSnackBarSuccessClass'
              });
              this.dataSource.data = this.dataSource.data.filter(v=> v.idClient != row.idClient)
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
