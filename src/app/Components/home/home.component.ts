import { Component, OnInit } from '@angular/core';
import { ICategoryData } from 'src/app/Interfaces/Category/ICategoryData';
import { IProduct } from 'src/app/Interfaces/Product/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allproducts: IProduct[] = [];
  categories: ICategoryData[] = [];
  apiErrorMessage: string = '';
  productSearchTitle: string = '';
  isLoading: boolean = false;

  constructor(
    private _ProductService: ProductService,
    private _CategoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.apiErrorMessage = '';

    this._ProductService.getAllProducts().subscribe({
      next: (response) => {
        this.allproducts = response.data;
      },
      error: (err) => {
        this.apiErrorMessage = err.message || 'Error loading products';
      }
    });

    this._CategoryService.GetAllCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.apiErrorMessage = err.error?.message || 'Error loading categories';
        this.isLoading = false;
      }
    });
  }
}