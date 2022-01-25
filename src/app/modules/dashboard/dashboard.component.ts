import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModulesService } from '../modules.service';
import { UserModel } from './UserModel';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  constructor(private modulesService: ModulesService,
              private router: Router) {}

  userList: UserModel[];
  user: UserModel;
  userId:string;

  ngOnInit(): void {
    this.getuserInformation();
    // this.getUserByUserId(this.userId);
  }


  public getuserInformation(): void{
    this.modulesService.getUserList().subscribe(
      data=>{ this.userList = data;
        err=>{
          console.log(err);
        }
      }
    )
  }

  public onClickToUser(userId:string){
    this.router.navigate(['user', userId],{
      queryParams: {'userId':userId }
    });
  }

}

