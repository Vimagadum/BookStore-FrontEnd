import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  register(reqdata:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44312/registerUser', reqdata, false, header)
  }
}
