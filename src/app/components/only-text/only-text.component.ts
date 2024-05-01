import { Component, Input } from '@angular/core';
import { ShowOnlyText } from 'src/app/interfaces/show-only-text';

@Component({
  selector: 'app-only-text',
  templateUrl: './only-text.component.html',
  styleUrls: ['./only-text.component.css']
})
export class OnlyTextComponent {
  @Input() text?: ShowOnlyText;
}
