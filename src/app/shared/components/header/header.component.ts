import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profilePicture:any=null;
  fullName:string="admin admin";
  constructor(
    private dialog: MatDialog,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

 /** message de déconnexion */
 logout() {
  const dialogDecnx = this.dialog.open(ConfirmationComponent, {
    data: {
      title: 'Déconnexion',
      message: 'Voulez-vous vraiment quitter application ?',
      buttonText: {
        ok: 'Oui',
        cancel: 'Non',
      },
    },
    panelClass: 'confirmation-popup',
  });
  dialogDecnx.afterClosed().subscribe((confirmed: boolean) => {
    if (confirmed) {
      this.loginService.logout();
    }
  });
}

}
