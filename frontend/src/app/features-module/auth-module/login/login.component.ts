// angular module
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

// rxjs
import { Subscription } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// reducer
import { USR_IS_CONNECTING } from '../../../shared-module/reducers/user.reducer';

// our interfaces
import { IStore } from '../../../shared-module/interfaces/store.interface';
import { IUser, IUserRecord } from '../../../shared-module/interfaces/user.interface';
import {Http , Headers , RequestOptions, Response} from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private user: IUser;
  private userSub: Subscription;
  private extractedData;


  constructor(private store$: Store<IStore>, private http:Http) {
    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe((user: IUser) => this.user = user);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  connectUser(user: IUser) {
    
    console.log(user);
    this.store$.dispatch({type: USR_IS_CONNECTING, payload: user});
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(user);
    //console.log(body)
    //return this.http.post('http://localhost/ezawphp/connexion_usr.php',body)
    //.map(res => res.json())
    //.subscribe(res => console.log(this.extractedData = res));          
  }
  
}
