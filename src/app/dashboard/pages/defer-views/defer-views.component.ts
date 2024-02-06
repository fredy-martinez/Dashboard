import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersComponent, CommonModule, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export class DeferViewsComponent {}
