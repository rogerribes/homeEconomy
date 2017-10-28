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

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
