import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/Product/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  apiErrorMessage: string = '';
  isLoading: boolean = false;
  isLoadingButton: boolean = false;
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService
  ) { }


  ngOnInit(): void {
    const id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    if (id) {
      this._ProductService.getProductById(id).subscribe({
        next: (response) => {
          this.product = response.data;
          this.isLoading = false;
        },
        error: (err) => {
          this.apiErrorMessage = err.error.message;
          this.isLoading = false;
        }
      })
    }

  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  addProductToWishList(productId: string) {
    this.isLoadingButton = true;
    this._WishlistService.addProductToWidhList(productId).subscribe({
      next: (res) => {
        this.isLoadingButton = false;
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
          this.isLoadingButton = false;
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
