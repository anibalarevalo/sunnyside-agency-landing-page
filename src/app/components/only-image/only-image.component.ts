import { Component, Input } from '@angular/core';
import { ShowOnlyImage } from 'src/app/interfaces/show-only-image';

@Component({
  selector: 'app-only-image',
  templateUrl: './only-image.component.html',
  styleUrls: ['./only-image.component.css']
})
export class OnlyImageComponent {
  @Input() image?: ShowOnlyImage;
}
