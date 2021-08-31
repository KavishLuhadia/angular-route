import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-poject';

  homeRoute: string = 'home';
  settingsRoute:string = 'settings'

  routes = [
    {linkName: 'Home', urlToRender: 'home'},
    {linkName: 'Settings', urlToRender: 'settings'}
  ];
}
