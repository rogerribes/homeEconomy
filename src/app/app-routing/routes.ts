import { Routes } from '@angular/router';
import { RegisterComponent } from '../fire-base-auth/register/register.component';
import { LoginComponent } from '../fire-base-auth/login/login.component';
import { HomeEconomyComponent } from '../home-economy/home-economy.component';
import { ExpenseEntryComponent } from '../expense-entry/expense-entry.component';
import { CalculateComponent } from '../calculate/calculate.component';
import { MovementsComponent } from '../movements/movements.component';
import { EstadisticsComponent } from '../estadistics/estadistics.component';
import {CanRegisterGuard} from '../fire-base-auth/can-register.guard';
import {UserConnectedGuard} from '../fire-base-auth/user-connected.guard';



export const appRoutes: Routes = [
  {path: '', redirectTo: '/HomeEconomy', pathMatch: 'full'},
  {path: 'signIn', component: LoginComponent},
  {path: 'signUp', component: RegisterComponent, canActivate:[CanRegisterGuard]},
  {path: 'HomeEconomy', component: HomeEconomyComponent, canActivate: [UserConnectedGuard], children: [
    {path: 'ExpenseEntry', component: ExpenseEntryComponent},
    {path: 'Calculate', component: CalculateComponent},
    {path: 'Movements', component: MovementsComponent},
    {path: 'Estadistics', component: EstadisticsComponent}
  ]},
  {path: '**', redirectTo: '/HomeEconomy' }
];



