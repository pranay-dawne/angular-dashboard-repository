import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { MerchantComponent } from './modules/merchant/merchant.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: '', component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'merchant', component: PostsComponent},
      { path: 'user/:', component: UserComponent},
      { path: 'merchantDetail/:merchantId', component: MerchantComponent}
    ]
  }
// {
//   path:'',
//   redirectTo:'login',
//   pathMatch:'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
