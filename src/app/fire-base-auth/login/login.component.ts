import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PreferencesService} from "../preferences.service";
import {AuthService} from "../auth.service";
import {ISubscription} from "rxjs/Subscription";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  passwordFormControl = new FormControl('', [
    Validators.required]);

  public preferences;
  public allowRegister;

  private subscription: ISubscription;

  constructor(private prefService: PreferencesService, private authService: AuthService) {

  }

  ngOnInit() {
    console.log('INIT LOGIN COMPONENT');
    this.subscription = this.prefService.getPreferences().subscribe(
      data => {
       console.log('PREFERENCES', data);
        this.preferences = data;
        this.allowRegister = data.allowRegister;
      }
    );
  }

  ngOnDestroy() {
    console.log('DESTROY LOGIN COMPONENT');
    this.subscription.unsubscribe();
  }

  login(user: string, pass: string) {
    console.log('DATA ON LOGIN', user, pass);
    this.authService.logIn(user, pass);
  }
  logout() {
    this.authService.logOut();
  }

  register(user: string, pass: string) {
    this.authService.register(user, pass);
  }

}
