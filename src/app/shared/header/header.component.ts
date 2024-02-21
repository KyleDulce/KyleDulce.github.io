import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public menuItems: Array<MegaMenuItem> = [
    {
      separator: true
    },
    {
      label: 'About',
      title: 'About me',
      routerLink: '/about'
    },
    {
      label: 'Posts',
      title: 'My own posts',
      routerLink: '/posts'
    },
    {
      label: 'Projects',
      title: 'My Projects',
      routerLink: '/projects'
    }
  ]

}
