import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY } from 'rxjs';
import { ModulesModule } from '../modules.module';
import { ModulesService } from '../modules.service';
import { MerchantModel } from '../posts/MerchantModel';
import { SavedResponse } from '../posts/SavedResponse';
import { LoginRequest } from './LoginRequest';


@Component({
  selector: 'app-add-merchant-form',
  templateUrl: './add-merchant-form.component.html',
  styleUrls: ['./add-merchant-form.component.scss']
})
export class AddMerchantFormComponent implements OnInit {


  public merchant : MerchantModel = new MerchantModel();
  public loginRequest: LoginRequest = new LoginRequest();
  public savedResponse:SavedResponse = new SavedResponse();
  signUpResponse:any;
  durationInSeconds = 5;
  message:string;
  action:string;
  hide=true;

  constructor(private moduleService: ModulesService,
              private alert: MatSnackBar) { }

  ngOnInit(): void { }

  public saveMerchant(){
    // this.moduleService.addNewMerchant(this.merchant).subscribe(data =>{
    //     this.savedResponse = data;
    //     console.log(this.savedResponse);
    // });
    this.moduleService.merchantSignUp(this.loginRequest).subscribe(data=>{
      this.signUpResponse = data;
      console.log(this.signUpResponse);
      this.openSnackBar();
    },)
    // this.openSnackBar();
  }

  public openSnackBar(){
    this.alert.open(this.message = "Saved", this.action = this.signUpResponse.userId, {
      duration: this.durationInSeconds*1000
    });
  }



}
