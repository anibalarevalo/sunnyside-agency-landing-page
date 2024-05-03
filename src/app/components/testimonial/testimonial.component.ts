import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/interfaces/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  @Input() testimony?: Testimonial
}
