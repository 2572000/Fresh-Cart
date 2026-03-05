import { Component, OnInit } from '@angular/core';
import { ICategoryData } from 'src/app/Interfaces/Category/ICategoryData';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories:ICategoryData[]=[];
  apiErrorMessage:string='';
  isLoading = false;
  constructor(private _CategoryService:CategoryService){}
  ngOnInit(): void {
    this.isLoading = true;
    this._CategoryService.GetAllCategories().subscribe({
      next:(response)=>{
        this.categories=response.data;
        this.isLoading = false;
      },
      error:(err)=>{
        this.apiErrorMessage=err.error.message;
        this.isLoading = false;
      }
    })
  }



}
