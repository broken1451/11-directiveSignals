import { Component, signal } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interfaces';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  // public menuItems: MenuItem[] = [
  // {
  //   title: 'Counter',
  //   router: '/signals/home/counter'
  // },
  // {
  //   title: 'Mutaciones',
  //   router: '/signals/home/properties'
  // },
  // {
  //   title: 'User-info',
  //   router: '/signals/home/user-info'
  // }
  // ];

  public menuItems = signal<MenuItem[]>([
    {
      title: 'Counter',
      router: '/signals/home/counter'
    },
    {
      title: 'Mutaciones',
      router: '/signals/home/properties'
    },
    {
      title: 'User-info',
      router: '/signals/home/user-info'
    }
  ]);

}
