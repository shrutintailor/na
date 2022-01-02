import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
 @Injectable({
  providedIn: 'root'
})
export class AddService {
  readonly url = "http://localhost:3001/product"
  constructor(private http : HttpClient) { }

  
  getproduct():Observable<any[]>
  {
    return this.http.get<any>(this.url);
  }
 
  postproduct(val:any)
  {
     return this.http.post<any>(this.url,val)
  }
  editProduct(id:any)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  updateProduct(val:any)
  {
    debugger
    return this.http.put(`${this.url}/${val._id}}`,val);
  }
  deleteproduct(id:any)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
}
