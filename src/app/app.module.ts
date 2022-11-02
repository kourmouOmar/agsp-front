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
import { ParentModulesComponent } from './shared/components/parent-modules/parent-modules.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ParametrageComponent } from './modules/parametrage/parametrage.component';
import { ChantierComponent } from './modules/chantier/chantier.component';

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
    ChantierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /** import */
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
