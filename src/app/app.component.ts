import { trigger, state, style, transition, animate  } from '@angular/animations';
import { NgClass } from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {MenucomponentComponent } from './menucomponent/menucomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  menuState: string = 'out';
  togglemenu() { 
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}

