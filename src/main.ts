import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SeriesListComponent } from './series-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SeriesListComponent],
  template: `
    <app-series-list></app-series-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
