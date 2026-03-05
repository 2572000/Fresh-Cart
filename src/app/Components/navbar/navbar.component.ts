import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedInUser!: boolean;
  cartCount: number = 0;
  wishlistCount: number = 0;
  constructor(private _AuthService: AuthService, 
    private _CartService: CartService,
  private _WishlistService:WishlistService) { }
  ngOnInit(): void {
    this._AuthService.isLoggedInSubject.subscribe({
      next: (isLogged) => {
        this.isLoggedInUser = isLogged;
      }
    });
    this._CartService.cartCount.subscribe({
      next: (count) => {
        this.cartCount = count;
      }
    });
      this._WishlistService.wishlistCount.subscribe({
      next: (count) => {
        this.wishlistCount = count;
      }
    });
  }
  logOut() {
    this._AuthService.logOut();
  }

}
