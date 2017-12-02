import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {UserConnectedGuard} from '../fire-base-auth/user-connected.guard';

@NgModule ({
  imports: [
    CommonModule,
      RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  providers: [UserConnectedGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
