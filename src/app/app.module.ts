import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FireBaseAuthModule } from './fire-base-auth/fire-base-auth.module';
import { HomeEconomyComponent } from './home-economy/home-economy.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { MovementsComponent } from './movements/movements.component';
import { EstadisticsComponent } from './estadistics/estadistics.component';
import { CalculateComponent } from './calculate/calculate.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {AuthService} from './fire-base-auth/auth.service';
import { FireBaseDatabaseService } from './fire-base-auth/fire-base-database.service';
import { ExpensesService } from './fire-base-auth/expenses.service';
import { CalculateService } from './calculate/calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeEconomyComponent,
    ExpenseEntryComponent,
    MovementsComponent,
    EstadisticsComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FireBaseAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, FireBaseDatabaseService, ExpensesService, CalculateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
