import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../models/core.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /* ICONS */
  fabars = faBars

  public menuList: MenuItem[];

  constructor(
  ) { }

  ngOnInit(): void {
    this.menuList = [
      {
        label:'home',
        url:'/home'
      },
      {
        label:'boardgames',
        url:'/boardgames'
      },
      {
        label:'account',
        url:'/admin'
      },
      {
        label: 'about',
        url: '/about'
      }
    ]
  }

}
