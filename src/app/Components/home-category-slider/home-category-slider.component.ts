import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ICategoryData } from 'src/app/Interfaces/Category/ICategoryData';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-home-category-slider',
  templateUrl: './home-category-slider.component.html',
  styleUrls: ['./home-category-slider.component.css']
})
export class HomeCategorySliderComponent implements OnInit{
  categories:ICategoryData[]=[];
  apiErrorMessage:string='';
constructor(private _CategoryService:CategoryService){}
  ngOnInit(): void {
 
    this._CategoryService.GetAllCategories().subscribe({
      next:(response)=>{
        this.categories=response.data;
      },
      error:(err)=>{
        this.apiErrorMessage=err.error.message;
      }
    })
  }


   customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
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
}
