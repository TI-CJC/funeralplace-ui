import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'funeralplace-ui';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isSistemaRoute(): boolean {
    return this.currentRoute.startsWith('/sistema');
  }
}
