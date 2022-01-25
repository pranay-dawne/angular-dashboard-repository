import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressModel } from '../dashboard/address';
import { UserModel } from '../dashboard/UserModel';
import { OrderItemsModel } from '../merchant/OrderItemsModel';
import { ModulesService } from '../modules.service';
import { OrderModel } from './OrderModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  panelOpenState = false;

   user:UserModel;
   defaultAddress: AddressModel;
   orderObject:OrderModel;
   userLogin:any;

   orderList:any[]

   userId:string
   orderId:string
   isLoading=true;
  constructor(private moduleService: ModulesService,
              private acitvateRouting: ActivatedRoute) {}

  ngOnInit(): void {
    // this.userId = this.acitvateRouting.snapshot.params['userId'];
    this.acitvateRouting.queryParams.subscribe(params=>{
      this.userId = params['userId'];
    })
    this.moduleService.getUser(this.userId).subscribe(data => {
      this.user = data;
    });
    this.moduleService.getDefaultAddress(this.userId).subscribe(data =>{
      this.defaultAddress=data;
    });
    this.moduleService.getUserOrder(this.userId).subscribe(data=>{
      this.orderList=data;
      this.isLoading=false;
      console.log(this.orderList);
    });
    this.moduleService.getUserProfile(this.userId).subscribe(data=>{
      this.userLogin=data;
      console.log(this.userLogin);
    });
  }

}
