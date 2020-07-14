import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NguCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
