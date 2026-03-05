import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {
cartId!: string;
  apiErrorMessage:string='';
  isLoading:boolean=false;
  constructor(private _ActivatedRoute: ActivatedRoute,private _OrderService:OrderService){}


  ngOnInit(): void {
  this.cartId = this._ActivatedRoute.snapshot.paramMap.get('cartId')!;
}

handelShippingAddress(){
  if(this.shippingAddressForm.valid){
    this.isLoading = true;
    this._OrderService.Checkout(this.cartId,this.shippingAddressForm.value).subscribe({
      next:(response)=>{
        window.location.href=response.session.url
         this.isLoading = false;
      },
      error:(err)=>{console.log(err.error);
         this.isLoading = false;
      }
    })
  }  
}

    get details() {
      return this.shippingAddressForm.get('details');
    }
    get phone() {
      return this.shippingAddressForm.get('phone');
    }
    get city() {
      return this.shippingAddressForm.get('city');
    }
    shippingAddressForm:FormGroup = new FormGroup({
      details: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
      city: new FormControl(null, [Validators.required])
    });
}
