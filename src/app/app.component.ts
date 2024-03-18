import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <h1>Medical Health Care for Students</h1>
    </div>

  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'med-health-app';
}
