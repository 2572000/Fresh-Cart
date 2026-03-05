import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ForgotPasswordsComponent } from './Components/forgot-passwords/forgot-passwords.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { VerifyResetCodeComponent } from './Components/verify-reset-code/verify-reset-code.component';
import { CommonProductComponent } from './Components/common-product/common-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeMainSliderComponent } from './Components/home-main-slider/home-main-slider.component';
import { HomeCategorySliderComponent } from './Components/home-category-slider/home-category-slider.component';
import { AddToCartButtonComponent } from './Components/add-to-cart-button/add-to-cart-button.component';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { AddEGPPipe } from './pipes/add-egp.pipe';
import { SliceTitlePipe } from './pipes/slice-title.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { LoadingComponent } from './Components/shared/loading/loading.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    ForgotPasswordsComponent,
    ResetPasswordComponent,
    VerifyResetCodeComponent,
    CommonProductComponent,
    ProductDetailsComponent,
    HomeMainSliderComponent,
    HomeCategorySliderComponent,
    AddToCartButtonComponent,
    ShippingAddressComponent,
    AddEGPPipe,
    SliceTitlePipe,
    SearchPipe,
    LoadingComponent,
    WishlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
