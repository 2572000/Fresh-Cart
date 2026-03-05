import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: any = null;
  isLoading: boolean = false;
  apiErrorMessage: string = '';

  constructor(
    private _CartService: CartService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.isLoading = true;
    this._CartService.getProductItem().subscribe({
      next: (response) => {
        this.cartData = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.apiErrorMessage = 'Failed to load cart';
        this.isLoading = false;
      }
    });
  }

  deleteItem(productId: string) {
    this.isLoading = true;

    this._CartService.removeProductItem(productId).subscribe({
      next: (response) => {
        this.cartData = response.data;
        this._CartService.cartCount.next(response.numOfCartItems);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  increaseProductCount(productId: string, count: number) {

    if (count < 1) {
      this.deleteItem(productId);
      return;
    }

    this.isLoading = true;

    this._CartService.updateCartCount(productId, count).subscribe({
      next: (response) => {
        this.cartData = response.data;
        this._CartService.cartCount.next(response.numOfCartItems);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  clearProductItems() {
    this.isLoading = true;

    this._CartService.clearProductItem().subscribe({
      next: (response) => {
        this.cartData = null; 
        this._CartService.cartCount.next(0);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  goToShipping(cartId: string) {
    this._Router.navigate(['/shipping', cartId]);
  }
}