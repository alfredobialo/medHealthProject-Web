import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1>Medical Health Care for Students</h1>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'med-health-app';
}
