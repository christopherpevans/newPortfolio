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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GtagModule } from 'angular-gtag';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { DialogOverviewExampleDialogComponent } from './admin/manage-blogs/manage-blogs.component';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UxComponent } from './ux/ux.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { FaqsComponent } from './faqs/faqs.component';

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
    NavBarComponent,
    PortfolioComponent,
    UxComponent,
    FooterComponent,
    BlogComponent,
    DialogOverviewExampleDialogComponent,
    FaqsComponent,
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
    AuthModule,
    AdminModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: config.key,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    GtagModule.forRoot({ trackingId: 'UA-138997951-1', trackPageviews: true }),
  ],
  entryComponents: [
    FormSubmissionComponent,
    DialogOverviewExampleDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
