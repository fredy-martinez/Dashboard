import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  public menuItems = routes
  //Mapear las rutas
    .map(
      //Puede venir o no
      (route) => route.children ?? []
    )
    .flat()
    //Excluir el vacío path: ''
    .filter((route) => route && route.path)
    //Excluir el :id
    .filter((route) => !route.path?.includes(':'));

  constructor() {}
}
