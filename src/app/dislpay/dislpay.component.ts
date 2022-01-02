import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
@Component({
  selector: 'app-dislpay',
  templateUrl: './dislpay.component.html',
  styleUrls: ['./dislpay.component.css']
})
export class DislpayComponent implements OnInit {

  public products :any
  constructor(private service:AddService) { }

  ngOnInit(): void {
    this.refreshData()
  }
  public refreshData()
  {
    this.service.getproduct().subscribe(data=>{
      this.products=data;
      console.log(data);
    });
  }
  deleteProduct(id:any)
  {
    console.warn(id);
    this.service.deleteproduct(id).subscribe(data=>{
      console.warn(data);
      if(data!=null)
      {
        this.refreshData();
      }
      else
      {
        console.warn("data is not deleted");
      }
    })
  }
}
