import { Component, OnInit } from '@angular/core';
import { IBrandData } from 'src/app/Interfaces/Brand/IBrandData';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
brands:IBrandData[]=[];
apiErrorMessage:string='';
isLoading = false;
constructor(private _BrandService:BrandService){}
 

ngOnInit(): void {
  this.isLoading = true;
    this._BrandService.GetAllBrands().subscribe({
      next:(response)=>{this.brands=response.data;
        this.isLoading = false;
      },
      error:(err)=>{this.apiErrorMessage=err.error.message;this.isLoading = false;}
    })
  }



}
