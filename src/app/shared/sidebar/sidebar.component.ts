import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', icon: 'ti-panel', class: '' },
  { path: 'issues', title: 'All Issues', icon: 'ti-view-list-alt', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isNotMobileMenu() {
    return false;
  }

}
