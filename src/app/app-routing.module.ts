import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero/tablero.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { tableroRoutes } from './tablero/tablero.routes';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'PeliculasTarzan',
  component:  TableroComponent,
  children: tableroRoutes
},
{
  path: '',
  component: RegistroComponent,
},
{
  path: '**',
  redirectTo: ''
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
