import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isSideNavbarOpen: boolean=true;
  mode: any;
  hasBackdrop:boolean=true;
  fullName:string = "Admin admin";
  @Input() menus: any;

  constructor(
    private dialog: MatDialog,
    private loginService: LoginService,
    ) {
    this.isSideNavbarOpen = true;
    if (window.innerWidth <= 768) {
      this.mode = 'over';
      this.hasBackdrop = true;
    } else {
      this.mode = 'side';
      this.hasBackdrop = false;
    }
   }

  ngOnInit(): void {
  }



  closeMobileSideNavbar(){}
  toggleSideNavbar() {
    this.isSideNavbarOpen = !this.isSideNavbarOpen;
  }

  /* change sidenavbar mode & backdrop for small  devices */
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

    if (window.innerWidth <= 768) {
      this.hasBackdrop = true;
      this.mode = 'over';
    } else {
      this.hasBackdrop = false;
      this.mode = 'side';
      this.isSideNavbarOpen = true;
    }
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
