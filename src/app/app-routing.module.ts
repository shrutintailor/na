import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DislpayComponent } from './dislpay/dislpay.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'product/add',
    component:AddComponent
  },
  {
    path:'product/display',
    component:DislpayComponent
  },
  {
    path:'product/edit/:id',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
