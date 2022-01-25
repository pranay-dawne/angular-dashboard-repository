import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { AddMerchantFormComponent } from '../add-merchant-form/add-merchant-form.component';
import { ModulesService } from '../modules.service';
import { MerchantModel } from './MerchantModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public merchantList:MerchantModel[];

  constructor(public dialog: MatDialog,
              private moduleService: ModulesService,
              private router: Router) { }

  validatingForm: FormGroup;

  ngOnInit(): void {
    this.moduleService.getMerchantList().subscribe(data =>{
      this.merchantList = data;
    })
  }

  onAddEmloyee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddMerchantFormComponent, dialogConfig);
  }

  public onClickToMerchant(merchantId: string){
    this.router.navigate(['merchantDetail', merchantId],{
      queryParams:{'merchantId': merchantId}
    })
  }

}
