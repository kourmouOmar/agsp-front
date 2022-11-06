import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ModulesComponent } from './modules/modules.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModuleComponent } from './shared/components/module/module.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { ParentModulesComponent } from './shared/components/parent-modules/parent-modules.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ParametrageComponent } from './modules/parametrage/parametrage.component';
import { ChantierComponent } from './modules/chantier/chantier.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AddClientComponent } from './modules/clients/add-client/add-client.component';
import { FicheClientComponent } from './modules/clients/fiche-client/fiche-client.component';
import { AddUserComponent } from './modules/parametrage/add-user/add-user.component';
import { FicheUserComponent } from './modules/parametrage/fiche-user/fiche-user.component';
import { CardComponent } from './shared/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { HostService } from './shared/service/host.service';
import { HttpClientRequest } from './shared/service/http-request-service';
import { ConfirmationComponent } from './shared/components/confirmation/confirmation.component';
import { SharedServiceService } from './shared/service/snack-service.service';
import { DetailUserComponent } from './modules/parametrage/detail-user/detail-user.component';
import { UpdateUserComponent } from './modules/parametrage/update-user/update-user.component';
import { DetailClientComponent } from './modules/clients/detail-client/detail-client.component';
import { UpdateClientComponent } from './modules/clients/update-client/update-client.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModulesComponent,
    HeaderComponent,
    FooterComponent,
    ModuleComponent,
    ParentModulesComponent,
    ClientsComponent,
    ProjectsComponent,
    ParametrageComponent,
    ChantierComponent,
    MenuComponent,
    AddClientComponent,
    FicheClientComponent,
    AddUserComponent,
    FicheUserComponent,
    CardComponent,
    ConfirmationComponent,
    DetailUserComponent,
    UpdateUserComponent,
    DetailClientComponent,
    UpdateClientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /** import */
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
  ],
  providers: [
    HostService,
    LoginService,
    HttpClientRequest,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
