import { Component } from '@angular/core';
import { ShowText } from 'src/app/interfaces/show-text';
import { text1, text2 } from 'src/app/mocks/text.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  text1: ShowText = text1;
  text2: ShowText = text2;
}
