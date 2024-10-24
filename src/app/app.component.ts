import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorByTypeComponent } from './selector-by-type/selector-by-type.component';
import { SelectorByAttrComponent } from './selector-by-attr/selector-by-attr.component';
import { SelectorByClassComponent } from './selector-by-class/selector-by-class.component';
import { BtnComponent } from './btn/btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BtnComponent,
    SelectorByTypeComponent,
    SelectorByAttrComponent,
    SelectorByClassComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
