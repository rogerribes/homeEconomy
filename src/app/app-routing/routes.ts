import { Routes } from '@angular/router';
import { RegisterComponent } from '../fire-base-auth/register/register.component';
import { LoginComponent } from '../fire-base-auth/login/login.component';
import { HomeEconomyComponent } from '../home-economy/home-economy.component';
import { ExpenseEntryComponent } from '../expense-entry/expense-entry.component';
import { CalculateComponent } from '../calculate/calculate.component';
import { MovementsComponent } from '../movements/movements.component';
import { EstadisticsComponent } from '../estadistics/estadistics.component';



export const appRoutes: Routes = [
  {path: '', redirectTo: '/HomeEconomy', pathMatch: 'full'},
  {path: 'signIn', component: LoginComponent},
  {path: 'signUp', component: RegisterComponent},
  {path: 'HomeEconomy', component: HomeEconomyComponent, canActivate: [], children: [
    {path: 'ExpenseEntry', component: ExpenseEntryComponent},
    {path: 'Calculate', component: CalculateComponent},
    {path: 'Movements', component: MovementsComponent},
    {path: 'estadistics', component: EstadisticsComponent}
  ]},
  {path: '**', redirectTo: '/HomeEconomy' }
];



