import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders',
  standalone: true,
  imports: [],
  template: ` <h1>Hola Mundo</h1>`,
  styles: ``,
})
export class HeavyLoadersComponent {
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }
}
