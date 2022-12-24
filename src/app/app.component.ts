import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-course';
  loadedFeature: string;

  onEmit(eventData: number) {
    console.log(eventData);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
