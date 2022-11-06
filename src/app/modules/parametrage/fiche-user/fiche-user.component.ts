import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/module/Utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { DetailUserComponent } from '../detail-user/detail-user.component';

@Component({
  selector: 'app-fiche-user',
  templateUrl: './fiche-user.component.html',
  styleUrls: ['./fiche-user.component.css']
})
export class FicheUserComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'prenom', 'email', 'action'];
  dataSource!: MatTableDataSource<Utilisateur>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private  utilisateurService:UtilisateurService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {
  }
  ngOnInit(): void {
    this.utilisateurService.getAllUtilisateur().subscribe(res => {
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

  detailUser(row:any){
      const dialogRef = this.dialog.open(DetailUserComponent,{
        data:{
          user: row
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });

  }
  updateUser(row:any){
    this.router.navigateByUrl('/user/update', { state: { utilisateur: row } });

    //this.router.navigate(['/user/update',{user:row}]);
  }
  deleteUser(row:any){
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: 'Suppression utilisateur',
        message: "Vous êtes sûr de supprimer cet utilisateur ?",
        buttonText: {
          ok: 'Valider',
          cancel: 'Annuler'
        }
      },
      panelClass: 'confirmation-popup'
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.utilisateurService.deleteUtilisateurrById(row).subscribe(
          {
            next : () => {
              this._snackBar.open("Suppression avec succes ","Fermer", {
                duration: 10000,
                panelClass: 'oppenSnackBarSuccessClass'
              });
              this.dataSource.data = this.dataSource.data.filter(v=> v.idUtilisateur != row.idUtilisateur)
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





