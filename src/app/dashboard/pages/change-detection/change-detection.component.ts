import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="CurrentFramework()"> </app-title>
    <pre> {{ frameworkAsSignal() | json }}</pre>
    <pre> {{ frameworkAsProperty | json }}</pre>
  `,
})
export class ChangeDetectionComponent {
  public CurrentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));

      console.log('Hecho');
    }, 3000);
  }
}
