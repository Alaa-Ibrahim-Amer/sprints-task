import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  constructor(private httpClient: HttpClient, private router: Router,private auth:AuthService) { }
  getheader(){
    return new HttpHeaders({'Content-Type':'application/json; charset=utf-8','x-access-token': this.auth.getToken()})
  }
  addOrder(data:any){
    const header =this.getheader();
    return this.httpClient.post(`${environment.apiUrl}orders`, data,{headers: header});
  }
}
