import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from "../add.service";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private service:AddService,private router :Router) { }
  public id:any
  public data:any ={

    name:'',
    state:'',
    email:''
  
    };
    form=new FormGroup({
      name: new FormControl(this.data.name, [
        Validators.required,
      ]),
    
      state: new FormControl(this.data.state, [
        Validators.required,
      ]),
      email: new FormControl(this.data.email, [
        Validators.required,
      ]),
      
  
    });
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe(parmas=>{
      this.id=parmas['id'];
  });
  console.warn(this.id);
  if(this.id!=null)
  {
    this.getProductDetailById();
  }
  }

  getProductDetailById()
  {
    
      this.service.editProduct(this.id).subscribe(data=>{
          if(data.toString())
          {
            console.log("getProductDetailById:="+data);
          }
          this.data=data;
          console.warn(this.data._id);
          this.data.patchValue({
            name:this.data.name,
            state:this.data.state,
            email:this.data.email
          });
      });
  }
  onSubmit()
  {
    debugger
    var data2={
      _id:this.id,
      name:this.form.value.name,
      state:this.form.value.state,
      email:this.form.value.email
    };
    debugger
    this.service.updateProduct(data2).subscribe(data=>{
      if(data!=null)
      {
        this.router.navigate(['product/display']);
      }
      else
      {
        alert("data is not updated");
      }
    })
  }
}
