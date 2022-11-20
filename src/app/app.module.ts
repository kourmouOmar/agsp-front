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
import { BureauEtudeComponent } from './modules/bureau-etude/bureau-etude.component';
import { BureauControleComponent } from './modules/bureau-controle/bureau-controle.component';
import { AddBureauEtudeComponent } from './modules/bureau-etude/add-bureau-etude/add-bureau-etude.component';
import { FicheBureauEtudeComponent } from './modules/bureau-etude/fiche-bureau-etude/fiche-bureau-etude.component';
import { UpdateBureauEtudeComponent } from './modules/bureau-etude/update-bureau-etude/update-bureau-etude.component';
import { DetailBureauEtudeComponent } from './modules/bureau-etude/detail-bureau-etude/detail-bureau-etude.component';
import { DetailBureauControleComponent } from './modules/bureau-controle/detail-bureau-controle/detail-bureau-controle.component';
import { AddBureauControleComponent } from './modules/bureau-controle/add-bureau-controle/add-bureau-controle.component';
import { UpdateBureauControleComponent } from './modules/bureau-controle/update-bureau-controle/update-bureau-controle.component';
import { FicheBureauControleComponent } from './modules/bureau-controle/fiche-bureau-controle/fiche-bureau-controle.component';
import { FicheProjetComponent } from './modules/projects/fiche-projet/fiche-projet.component';
import { AddProjetComponent } from './modules/projects/add-projet/add-projet.component';
import { UpdateProjetComponent } from './modules/projects/update-projet/update-projet.component';
import { DetailProjetComponent } from './modules/projects/detail-projet/detail-projet.component';
import { DetailChantierComponent } from './modules/chantier/detail-chantier/detail-chantier.component';
import { AddChantierComponent } from './modules/chantier/add-chantier/add-chantier.component';
import { UpdateChantierComponent } from './modules/chantier/update-chantier/update-chantier.component';
import { FicheChantierComponent } from './modules/chantier/fiche-chantier/fiche-chantier.component';


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
    BureauEtudeComponent,
    BureauControleComponent,
    AddBureauEtudeComponent,
    FicheBureauEtudeComponent,
    UpdateBureauEtudeComponent,
    DetailBureauEtudeComponent,
    DetailBureauControleComponent,
    AddBureauControleComponent,
    UpdateBureauControleComponent,
    FicheBureauControleComponent,
    FicheProjetComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    DetailProjetComponent,
    DetailChantierComponent,
    AddChantierComponent,
    UpdateChantierComponent,
    FicheChantierComponent,

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
