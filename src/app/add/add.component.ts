import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public id :any
  public data:any ={

  name:'',
  state:'',
  email:''

  };
  form=new FormGroup({
    name: new FormControl(this.data.name, [
      Validators.required,
      //Validators.email,
    ]),
    state: new FormControl(this.data.state, [
      Validators.required,
    ]),
    email: new FormControl(this.data.email, [
      Validators.required,
    ]),
    

  });
  constructor(private service:AddService,
    private routers:Router) { }

  ngOnInit(): void {
  }

  public onsubmit(){
    console.log(this.data)
    this.service.postproduct(this.data).subscribe(data=>{
     //alert("ok")
      this.routers.navigate(['product/display']);
    })

    
  }

  edit(data:any)
  {
    // this.postData.id=data.dataItem.id;
    //  var val=data.dataItem;
    
    this.id=data.id;
    console.log(this.id)
    // this.form.patchValue({
    //   id: this.id,
    //   custname:data.dataItem.custname,
    //   email:data.dataItem.email,
    //   city:data.dataItem.city
    // });
    //this.update(data.dataItem.custid)
  }
  
   
}
