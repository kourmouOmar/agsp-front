import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BureauControleService } from 'src/app/services/bureau-controle.service';
import { BureauEtudeService } from 'src/app/services/bureau-etude.service';
import { ClientService } from 'src/app/services/client.service';
import { ProjetService } from 'src/app/services/projet.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { DetailProjetComponent } from '../detail-projet/detail-projet.component';

@Component({
  selector: 'app-fiche-projet',
  templateUrl: './fiche-projet.component.html',
  styleUrls: ['./fiche-projet.component.css']
})
export class FicheProjetComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'designation', 'emailResponsable','telephoneResponsable','client', 'action'];
  dataSource!: MatTableDataSource<any>;
  clients:any;
  bureauEtudes:any;
  bureauControles:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private  projetService:ProjetService,
    private clientService:ClientService,
    private bureauEtudeService:BureauEtudeService,
    private bureauControleService:BureauControleService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {
  }
  ngOnInit(): void {
    this.projetService.getAllProjet().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.clientService.getAllClient().subscribe(res=>{this.clients =res});
    this.bureauControleService.getAllBueauControles().subscribe(res=>{this.bureauControles = res});
    this.bureauEtudeService.getAllBueauEtudes().subscribe(res=>{this.bureauEtudes = res});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  detailProjet(row:any){
      const dialogRef = this.dialog.open(DetailProjetComponent,{
        data:{
          projet: row
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
  }
  updateProjet(row:any){
    this.router.navigateByUrl('/projet/update', { state: { projet: row, clients: this.clients, bureauEtudes:this.bureauEtudes, bureauControles: this.bureauControles } });
  }

  deleteProjet(row:any){
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: "Suppression projet",
        message: "Vous êtes sûr de supprimer projet ?",
        buttonText: {
          ok: 'Valider',
          cancel: 'Annuler'
        }
      },
      panelClass: 'confirmation-popup'
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.projetService.deleteProjetById(row).subscribe(
          {
            next : () => {
              this._snackBar.open("Suppression avec succes ","Fermer", {
                duration: 10000,
                panelClass: 'oppenSnackBarSuccessClass'
              });
              this.dataSource.data = this.dataSource.data.filter(v=> v.idProjet != row.idProjet)
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
