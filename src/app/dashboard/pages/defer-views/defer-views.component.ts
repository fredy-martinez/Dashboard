import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersComponent, CommonModule],
  templateUrl: './defer-views.component.html',
})
export class DeferViewsComponent {}
