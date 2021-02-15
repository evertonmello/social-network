import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media-dashboard';
  public mode = localStorage.getItem('mode') || 'dark';
  public networks = ['instagram', 'facebook', 'twitter', 'youtube'];;
  public overviewList = [
    {
      type: 'Likes',
      value: 1231,
      network: 'facebook',
      variation: 12
    }, {
      type: 'Page Views',
      value: 1231,
      network: 'facebook',
      variation: -12
    },
    {
      type: 'Likes',
      value: 1231,
      network: 'instagram',
      variation: 4
    },
    {
      type: 'Profile Views',
      value: 1231,
      network: 'instagram',
      variation: 2
    },
    {
      type: 'Retweets',
      value: 1231,
      network: 'twitter',
      variation: 533
    },
    {
      type: 'Likes',
      value: 1231,
      network: 'instagram',
      variation: 212
    },
    {
      type: 'Profile Views',
      value: 1231,
      network: 'instagram',
      variation: 54
    },
    {
      type: 'Profile Views',
      value: 1231,
      network: 'instagram',
      variation: -122
    }
  ]
  constructor() {
    document.body.className = this.mode;
  }

  public setMode() {
    this.mode = this.mode == 'dark' ? 'light' : 'dark';
    this.setModeTheme();
    this.saveMode();
  }

  setModeTheme() {
    if (this.mode === 'dark') {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }

  saveMode() {
    localStorage.setItem('mode', this.mode)
  }
}
