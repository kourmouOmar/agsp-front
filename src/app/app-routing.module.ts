import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'modules',component:ModulesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
