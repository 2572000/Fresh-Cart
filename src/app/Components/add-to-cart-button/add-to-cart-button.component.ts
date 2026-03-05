import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
  animations: [
    trigger('fadeAlert', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('300ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        )
      ])
    ])
  ]
})
export class AddToCartButtonComponent {

  @Input() productId!: string;

  isLoading: boolean = false;


  constructor(
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) { }

  addProductToCart() {

    if (this.isLoading) return;

    this.isLoading = true;

    this._CartService.addProductToCart(this.productId).subscribe({
      next: (response) => {
        this._ToastrService.success(
          'Product has been added to your cart successfully 🎉',
          'Added Successfully',
          {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
            closeButton: true
          }
        );
        this._CartService.cartCount.next(response.numOfCartItems);
      },
      error: (err) => {
          this._ToastrService.error(
          'Something went wrong',
          'Error',
          {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
            closeButton: true
          }
        );
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}