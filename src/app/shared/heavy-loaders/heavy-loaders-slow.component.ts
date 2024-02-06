import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders',
  standalone: true,
  imports: [CommonModule],
  template: ` 
  <section [ngClass]="['w-full h-[600px]', cssClass]">
    <p>
      Heavy Loader Slow
    </p>

  </section>`,
  styles: ``,
})
export class HeavyLoadersComponent {

  @Input({required: true}) cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('cargado');
    
  }
}
