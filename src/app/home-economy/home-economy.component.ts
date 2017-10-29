import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-economy',
  templateUrl: './home-economy.component.html',
  styleUrls: ['./home-economy.component.css']
})
export class HomeEconomyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public menuItems = [
    {
      path: '/HomeEconomy/ExpenseEntry',
      title: 'Nueva Entrada',
      icon: 'dialpad'
    }, {
      path: '/HomeEconomy/Calculate',
      title: 'Calcular',
      icon: 'dialpad'
    }, {
      path: '/HomeEconomy/Movements',
      title: 'Movimientos',
      icon: 'dialpad'
    }, {
      path: '/HomeEconomy/Estadistics',
      title: 'Estadisticas',
      icon: 'dialpad'
    }
  ];

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
