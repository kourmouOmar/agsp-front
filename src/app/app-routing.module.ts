import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddBureauControleComponent } from './modules/bureau-controle/add-bureau-controle/add-bureau-controle.component';
import { BureauControleComponent } from './modules/bureau-controle/bureau-controle.component';
import { FicheBureauControleComponent } from './modules/bureau-controle/fiche-bureau-controle/fiche-bureau-controle.component';
import { UpdateBureauControleComponent } from './modules/bureau-controle/update-bureau-controle/update-bureau-controle.component';
import { AddBureauEtudeComponent } from './modules/bureau-etude/add-bureau-etude/add-bureau-etude.component';
import { BureauEtudeComponent } from './modules/bureau-etude/bureau-etude.component';
import { FicheBureauEtudeComponent } from './modules/bureau-etude/fiche-bureau-etude/fiche-bureau-etude.component';
import { UpdateBureauEtudeComponent } from './modules/bureau-etude/update-bureau-etude/update-bureau-etude.component';
import { AddClientComponent } from './modules/clients/add-client/add-client.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { FicheClientComponent } from './modules/clients/fiche-client/fiche-client.component';
import { UpdateClientComponent } from './modules/clients/update-client/update-client.component';
import { ModulesComponent } from './modules/modules.component';
import { AddUserComponent } from './modules/parametrage/add-user/add-user.component';
import { FicheUserComponent } from './modules/parametrage/fiche-user/fiche-user.component';
import { ParametrageComponent } from './modules/parametrage/parametrage.component';
import { UpdateUserComponent } from './modules/parametrage/update-user/update-user.component';
import { AddProjetComponent } from './modules/projects/add-projet/add-projet.component';
import { FicheProjetComponent } from './modules/projects/fiche-projet/fiche-projet.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { UpdateProjetComponent } from './modules/projects/update-projet/update-projet.component';
import { AuthGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'login',component:LoginComponent },
  { path:'modules',component:ModulesComponent,canActivate: [AuthGuard],},
  {
    path: "user",
    component: ParametrageComponent,
    children: [
      {
        path: "add",
        component: AddUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "fiche",
        component: FicheUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "update",
        component: UpdateUserComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
  {
    path: "client",
    component: ClientsComponent,
    children: [
      {
        path: "add",
        component: AddClientComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "fiche",
        component: FicheClientComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "update",
        component: UpdateClientComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: "projet",
    component: ProjectsComponent,
    children: [
      {
        path: "add",
        component: AddProjetComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "fiche",
        component: FicheProjetComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "update",
        component: UpdateProjetComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
  {
    path: "chantier",
    component: ParametrageComponent,
    children: [
      {
        path: "add",
        component: AddUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "fiche",
        component: FicheUserComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
  {
    path: "bureau-etude",
    component: BureauEtudeComponent,
    children: [
      {
        path: "add",
        component: AddBureauEtudeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "fiche",
        component: FicheBureauEtudeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "update",
        component: UpdateBureauEtudeComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
  {
    path: "bureau-controle",
    component: BureauControleComponent,
    children: [
      {
        path: "add",
        component: AddBureauControleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "fiche",
        component: FicheBureauControleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "update",
        component: UpdateBureauControleComponent,
        canActivate: [AuthGuard],
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
