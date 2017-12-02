import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../fire-base-auth/auth.service';

@Component({
  selector: 'app-home-economy',
  templateUrl: './home-economy.component.html',
  styleUrls: ['./home-economy.component.css']
})
export class HomeEconomyComponent implements OnInit {

  public menuItems = [
    {
      path: '/HomeEconomy/ExpenseEntry',
      title: 'Nueva Entrada',
      icon: 'add'
    }, {
      path: '/HomeEconomy/Calculate',
      title: 'Calcular',
      icon: 'chrome_reader_mode'
    }, {
      path: '/HomeEconomy/Movements',
      title: 'Movimientos',
      icon: 'toc'
    }, {
      path: '/HomeEconomy/Estadistics',
      title: 'Estadisticas',
      icon: 'trending_up'
    }
    , {
      path: '/HomeEconomy/Preferences',
      title: 'Preferencias',
      icon: 'developer_board'
    }
  ];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  signout() {
    this.authService.logOut();
  }
}
