import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { WixComponent } from './wix/wix.component';
import { CustomSiteComponent } from './custom-site/custom-site.component';
import { ShopifyComponent } from './shopify/shopify.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormSubmissionComponent } from './shared/form-submission.component';
import { config } from '../config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    OurWorksComponent,
    OurServicesComponent,
    TestimonialsComponent,
    PricingComponent,
    WordpressComponent,
    WixComponent,
    CustomSiteComponent,
    ShopifyComponent,
    ContactUsComponent,
    FormSubmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NguCarouselModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: config.key,
    }),
  ],
  entryComponents: [FormSubmissionComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
