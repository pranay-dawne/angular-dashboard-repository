import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ModulesService } from '../modules.service';
import { MerchantModel } from '../posts/MerchantModel';
import { SavedResponse } from '../posts/SavedResponse';
import { OrderItemsModel } from './OrderItemsModel';
import { OrderPlacedDto } from './OrderPlacedDto';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss'],
  animations: [
  ]
})
export class MerchantComponent implements OnInit {


  merchant: MerchantModel = new MerchantModel();
  saved:SavedResponse;

  placedOrderList:OrderPlacedDto[];
  acceptedOrderList:OrderPlacedDto[];
  outForDeliveryOrderList:OrderPlacedDto[];
  completedOrderList:OrderPlacedDto[];
  cancelledOrderList:OrderPlacedDto[];
  itemsList:OrderItemsModel[];


  message:string;
  action:string;
  durationInSeconds = 4;
  merchantId:string;
  orderId:any;
  spinner: any;
  isLoading=true;

  constructor( private snackAlert: MatSnackBar, private modulesService: ModulesService, private activateRouting: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.merchantId = this.activateRouting.snapshot.params['merchantId'];

    this.activateRouting.queryParams.subscribe(params=>{
      this.merchantId = params['merchantId'];
    })

    this.getPendingOrders();

    this.modulesService.getMerchantDetail(this.merchantId).subscribe(data=>{
      this.merchant=data;
      console.log(this.merchant);
    });

  }

  public getPendingOrders(){
    this.modulesService.getPlacedOrder(this.merchantId).subscribe(data=>{
      this.placedOrderList = data;
      this.isLoading=false;
      console.log(this.placedOrderList);
    });

  };
  public onClickToActiveOrder(){
    this.isLoading = true;
      this.modulesService.getAcceptedOrder(this.merchantId).subscribe(data=>{
        this.acceptedOrderList=data;
        this.isLoading=false;
        console.log(this.acceptedOrderList);
      });
    };
  public onClickToOutForDeliveryOrder(){
    this.isLoading = true;
      this.modulesService.getOutForDeliveryOrder(this.merchantId).subscribe(data=>{
        this.outForDeliveryOrderList=data;
        this.isLoading=false;
        console.log(this.outForDeliveryOrderList);
      });
    };
  public onClickToCompletedOrder(){
    this.isLoading = true;
      this.modulesService.orderCompleted(this.merchantId).subscribe(data=>{
        this.completedOrderList=data;
        this.isLoading=false;
        console.log(this.completedOrderList);
      });
    };
  public onClickToCancelledOrder(){
    this.isLoading = true;
      this.modulesService.orderCancelled(this.merchantId).subscribe(data=>{
        this.cancelledOrderList=data;
        this.isLoading=false;
        console.log(this.cancelledOrderList);
      });
    };
  }




