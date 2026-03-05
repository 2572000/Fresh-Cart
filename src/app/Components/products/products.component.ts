import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/Product/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  apiErrorMessage: string = '';
  categoryId: string = '';
  brandId: string = '';
  productSearchTitle: string = '';
  isLoading: boolean = false;

  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._ActivatedRoute.queryParams.subscribe(params => {

      this.categoryId = params['category'];
      this.brandId = params['brand'];

      this.loadProducts();

    });
  }

  loadProducts() {

    this.isLoading = true;
    this.apiErrorMessage = '';

    let request$;

    if (this.categoryId) {
      request$ = this._ProductService.getProductsByCategory(this.categoryId);
    }
    else if (this.brandId) {
      request$ = this._ProductService.getProductsByBrand(this.brandId);
    }
    else {
      request$ = this._ProductService.getAllProducts();
    }

    request$.subscribe({
      next: (res) => {
        this.products = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.apiErrorMessage = 'Something went wrong!';
        this.isLoading = false;
      }
    });
  }
}