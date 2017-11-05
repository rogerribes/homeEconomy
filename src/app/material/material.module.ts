import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_DATE_LOCALE, MatCardModule, MatToolbarModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatTableModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ]
})
export class MaterialModule { }
