import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/Product/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishListProduct: IProduct[] = [];
  isLoading = false;
  constructor(private _WishlistService: WishlistService, private _CartService: CartService,private _ToastrService:ToastrService) { }


  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist() {
    this.isLoading = true;
    this._WishlistService.getProductWishList().subscribe({
      next: (res: any) => {
        this.wishListProduct = res.data;
        this.isLoading = false;
      },
      error: (err) => console.log(err)
    });
  }

  removeFromWishlist(productId: string) {
    this.isLoading = true;
    this._WishlistService.removeFromWishlist(productId).subscribe({
      next: (res) => {
        this.wishListProduct = this.wishListProduct.filter(p => p._id !== productId);
        this._WishlistService.wishList.next(res.data);
        //this.loadWishlist();
        this._WishlistService.wishlistCount.next(res.data.length);
        this.isLoading = false;
        
      },
      error: (err) => {
               
      }
    });
  }

  addToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => { 
        this._CartService.cartCount.next(res.numOfCartItems);
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
      },
      error: (err) =>{
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

    });
  }

}
