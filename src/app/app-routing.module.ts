import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ForgotPasswordsComponent } from './Components/forgot-passwords/forgot-passwords.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { VerifyResetCodeComponent } from './Components/verify-reset-code/verify-reset-code.component';
import { authGuard } from './Guards/auth.guard';
import { noAuthGuard } from './Guards/no-auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},   //Default
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'wishlist',canActivate:[authGuard],component:WishlistComponent},
  {path:'shipping/:cartId',canActivate:[authGuard],component:ShippingAddressComponent},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'login',canActivate:[noAuthGuard],component:LoginComponent},
  {path:'register',canActivate:[noAuthGuard],component:RegisterComponent},
  {path:'forgotPassword',canActivate:[noAuthGuard],component:ForgotPasswordsComponent},
  {path:'resetPassword',canActivate:[noAuthGuard],component:ResetPasswordComponent},
  {path:'verifyResetCode',canActivate:[noAuthGuard],component:VerifyResetCodeComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
