// angular module
import { Component, OnInit } from '@angular/core';
import { IUser, IUserRecord } from '../../../shared-module/interfaces/user.interface';
import {Http , Headers , RequestOptions, Response} from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public nUser : IUser = {  username: "", password: "" , emailAdress: "", isConnected : false , isConnecting : false, isDisconnecting : false, connectionFailed : false }
  public confirmPass;
  public extactdata;

  constructor(private http:Http) { }

  ngOnInit() {
  }

  clicked(){
    if(this.nUser.password != this.confirmPass ){
      console.log("negatif");
    } else {
      console.log("positif");
      console.log(this.nUser)
      this.addUser();
      //console.log(this.extactdata)
    }
  }


  addUser(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.nUser);
        return this.http.post('http://localhost/ezawphp/insertUser.php',body)
            .map(res => res.json())
          	.subscribe(res => console.log(this.extactdata = res));          
  }
}

