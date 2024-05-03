import { Component, Input } from '@angular/core';
import { ShowOnlyImage } from 'src/app/interfaces/show-only-image';
import { ShowOnlyText } from 'src/app/interfaces/show-only-text';

@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.css']
})
export class TextImageComponent {
  @Input() image?: ShowOnlyImage;
  @Input() text?: ShowOnlyText;

}
