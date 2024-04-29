import { Component, Input } from '@angular/core';
import { ShowText } from 'src/app/interfaces/show-text';

@Component({
  selector: 'app-only-text',
  templateUrl: './only-text.component.html',
  styleUrls: ['./only-text.component.css']
})
export class OnlyTextComponent {
  @Input() text?: ShowText;
}
