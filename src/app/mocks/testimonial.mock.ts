import { Testimonial } from "../interfaces/testimonial";

const routeImage: string = 'assets/img/image-'

export const testimony1: Testimonial = {
  profile: routeImage + 'emily.jpg',
  testimony: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
  name: 'Emily R.',
  position: 'Marketing Director',
}

export const testimony2: Testimonial = {
  profile: routeImage + 'thomas.jpg',
  testimony: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  name: 'Thomas S.',
  position: 'Chief Operating Officer',
}

export const testimony3: Testimonial = {
  profile: routeImage + 'jennie.jpg',
  testimony: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
  name: 'Jennie F.',
  position: 'Business Owner',
}