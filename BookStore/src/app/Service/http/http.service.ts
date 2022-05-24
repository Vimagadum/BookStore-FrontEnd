import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl="";

  constructor(private http:HttpClient) { }
  postService(url:string, reqPayload:any={},token:boolean=false,option:any){
    return this.http.post(this.BaseUrl+url,reqPayload, token && option)

  }
}
