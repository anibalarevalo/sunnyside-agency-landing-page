import { Component } from '@angular/core';
import { ShowOnlyImage } from 'src/app/interfaces/show-only-image';
import { ShowOnlyText } from 'src/app/interfaces/show-only-text';
import { Testimonial } from 'src/app/interfaces/testimonial';
import { image1, image2, imageGraphicDesign, imagePhotography } from 'src/app/mocks/image.mock';
import { testimony1, testimony2, testimony3 } from 'src/app/mocks/testimonial.mock';
import { text1, text2, textGraphicDesign, textPhotography } from 'src/app/mocks/text.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  text1: ShowOnlyText = text1;
  text2: ShowOnlyText = text2;

  image1: ShowOnlyImage = image1;
  image2: ShowOnlyImage = image2;

  imageGraphicDesign: ShowOnlyImage = imageGraphicDesign;
  textGraphicDesign: ShowOnlyText = textGraphicDesign;
  
  imagePhotography: ShowOnlyImage = imagePhotography;
  textPhotography: ShowOnlyText = textPhotography;

  testimony1: Testimonial = testimony1
  testimony2: Testimonial = testimony2
  testimony3: Testimonial = testimony3
}
