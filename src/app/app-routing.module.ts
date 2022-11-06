import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddClientComponent } from './modules/clients/add-client/add-client.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { FicheClientComponent } from './modules/clients/fiche-client/fiche-client.component';
import { ModulesComponent } from './modules/modules.component';
import { AddUserComponent } from './modules/parametrage/add-user/add-user.component';
import { FicheUserComponent } from './modules/parametrage/fiche-user/fiche-user.component';
import { ParametrageComponent } from './modules/parametrage/parametrage.component';
import { UpdateUserComponent } from './modules/parametrage/update-user/update-user.component';
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
    ]
  },
  {
    path: "projet",
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
