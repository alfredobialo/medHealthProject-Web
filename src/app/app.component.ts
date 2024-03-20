import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <h1 class="text-muted"> <i class="la la-home la-3x"></i> Medical Health Care for Students</h1>
    </div>

  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'med-health-app';
}
