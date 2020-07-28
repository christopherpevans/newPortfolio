import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { EstimateComponent } from './estimate/estimate.component';
// import { CustomerComponent } from './customer/customer.component';

import { UxComponent } from './ux/ux.component';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// import { WebDesignComponent } from './web-design/web-design.component';
// import { ProfileComponent } from './profile/profile.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AdminRoutingModule } from './admin/admin-routing.module';

// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  // { path: 'estimate', component: EstimateComponent },
  // { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'ux', component: UxComponent },
  // { path: 'cart', component: ShoppingCartComponent , canActivate: [AuthGuard] },
  // { path: 'pricing/webdesign', component: WebDesignComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // AdminRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
