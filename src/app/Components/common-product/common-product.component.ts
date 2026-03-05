import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/Product/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-common-product',
  templateUrl: './common-product.component.html',
  styleUrls: ['./common-product.component.css']
})
export class CommonProductComponent implements OnInit {
  wishlistIds: string[] = [];
  @Input() product!: IProduct;

  constructor(private _CartService: CartService,
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService) { }
  ngOnInit(): void {
    this._WishlistService.wishList.subscribe({
      next: (res) => {
        this.wishlistIds = res;
      }
    })
  }

  addProductToCart(id: string) {
    this._CartService.addProductToCart(id).subscribe({
      next: (response) => {
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

  addProductToWishList(productId: string) {
    if (productId) {
      this._WishlistService.addProductToWidhList(productId).subscribe({
        next: (res) => {
          this._WishlistService.wishlistCount.next(res.data.length);
          this._WishlistService.wishList.next(res.data);
          this._ToastrService.success(
            'Product has been added to your Wish List successfully 🎉',
            'Added Successfully',
            {
              timeOut: 3000,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right',
              closeButton: true
            }
          );
        },
        error: (err) => {
          {
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
          }
        }
      })
    }

  }

isInWishList(id:string):boolean{
  return this.wishlistIds.includes(id);
}
  



}
