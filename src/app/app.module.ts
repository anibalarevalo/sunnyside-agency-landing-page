import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { OnlyImageComponent } from './components/only-image/only-image.component';
import { OnlyTextComponent } from './components/only-text/only-text.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    OnlyImageComponent,
    OnlyTextComponent,
    TextImageComponent,
    HeaderComponent,
    TestimonialComponent,
    AboutComponent,
    NavComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
