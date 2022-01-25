import { OrderItemsModel } from "./OrderItemsModel";

export class OrderPlacedDto{
  userId:string;
  addressName:string;
  userAddress:string;
  userLat:string;
  userLong:string;
  merchantId:string;
  merchantName:string;
  merchantImage:string;
  merchantAddress:string;
  merchantLat:string;
  merchantLong:string;
  orderId:string;
  orderStatus:string;
  transactionId:string;
  transactionMode:string;
  transactionStatus:string;
  numberOfItems:number;
  toPay:number;
  date:string;
  phoneNumber:string;
  customerName:string;
  items: OrderItemsModel[];

  public OrderPlacedDto(){

  }
}
