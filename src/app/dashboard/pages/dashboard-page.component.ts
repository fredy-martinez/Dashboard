import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styles: ``
})
export class DashboardPageComponent {

}
