import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './add-merchant-form/LoginRequest';
import { AddressModel } from './dashboard/address';
import { UserModel } from './dashboard/UserModel';
import { OrderItemsModel } from './merchant/OrderItemsModel';
import { OrderPlacedDto } from './merchant/OrderPlacedDto';
import { MerchantModel } from './posts/MerchantModel';
import { SavedResponse } from './posts/SavedResponse';
import { OrderModel } from './user/OrderModel';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  // private userId:string;
  apiEndPoint:string="";
  //  userId:string;

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  public getUserList(): Observable<UserModel[]>{
    console.log("this is modules service");
    return this.http.get<UserModel[]>(`${this.apiEndPoint}/user/findUsers`);
  }

  public getUser(userId:string):Observable<UserModel>{
    let params = new HttpParams().set("userId", userId);
    return this.http.get<UserModel>(`${this.apiEndPoint}/user/findUserById`, {params: params});
  }

  public getAddressList(userId:string):Observable<AddressModel[]>{
    let params = new HttpParams().set("userId", userId);
    return this.http.get<AddressModel[]>(`${this.apiEndPoint}/address/getUserAddress`, {params: params});
  }

  public getDefaultAddress(userId:string): Observable<AddressModel>{
    let params = new HttpParams().set("userId", userId);
    return this.http.get<AddressModel>(`${this.apiEndPoint}/address/getDefaultAddress`, {params: params});
  }

  public getOrderHistory(userId:string): Observable<OrderModel[]>{
    let params = new HttpParams().set("userId", userId);
    return this.http.get<OrderModel[]>(`${this.apiEndPoint}/order/orderHistory`, {params: params})
  }

  public getUserOrder(userId:string): any{
    let params = new HttpParams().set("userId", userId);
    return this.http.get(`${this.apiEndPoint}/order/userOrders`, {params: params})
  }

  public getUserProfile(userId:string):any{
    let params = new HttpParams().set("userId", userId);
    return this.http.get(`${this.apiEndPoint}/user/userLoginProfile`, {params: params})
  }



//-------Merchant APIs
  public getMerchantList(): Observable<MerchantModel[]>{
    return this.http.get<MerchantModel[]>(`${this.apiEndPoint}/merchant/merchantList`);
  }

  public getOrderStatusList():any{
    return this.http.get(`${this.apiEndPoint}/order/orderStatus`);
  }

  //----------------order statuses
  public getPlacedOrder(merchantId: string):any{
    let params = new HttpParams().set("merchantId", merchantId);
    return this.http.get(`${this.apiEndPoint}/order/orderPlaced`, {params: params});
  }
  public getAcceptedOrder(merchantId: string):any{
    let params = new HttpParams().set("merchantId", merchantId);
    return this.http.get(`${this.apiEndPoint}/order/orderAccepted`, {params: params});
  }
  public getOutForDeliveryOrder(merchantId: string):any{
    let params = new HttpParams().set("merchantId", merchantId);
    return this.http.get(`${this.apiEndPoint}/order/outForDeliveryOrder`, {params: params});
  }
  public orderCompleted(merchantId: string):any{
    let params = new HttpParams().set("merchantId", merchantId);
    return this.http.get(`${this.apiEndPoint}/order/orderCompleted`, {params: params});
  }
  public orderCancelled(merchantId: string):any{
    let params = new HttpParams().set("merchantId", merchantId);
    return this.http.get(`${this.apiEndPoint}/order/orderCancelled`, {params: params});
  }
  //----------------

  public getMerchantDetail(merchantId: string): Observable<MerchantModel>{
    let params = new HttpParams().set("merchantId", merchantId)
    return this.http.get<MerchantModel>(`${this.apiEndPoint}/merchant/getMerchantDetail`, {params: params});
  }

  public merchantSignUp(loginRequest:LoginRequest):any{
    return this.http.post(`${this.apiEndPoint}/merchant/merchantSignup`, loginRequest)
  }

}
