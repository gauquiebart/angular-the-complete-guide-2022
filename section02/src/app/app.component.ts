import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: chocolate;
    }
  `]
})
export class AppComponent {
  detailsShown = false;
  clicks = [];

  onShowDetails() {
    this.clicks.push(new Date());
  }

}
