import { Injectable, ViewContainerRef } from '@angular/core';

// ngrx - observable
import { Observable } from 'rxjs/Rx';

import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

// our component
import { ProfileComponent } from '../../features-module/nav-module/profile-module/profile/profile.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(userName: string,
                 firstName: string,
                 lastName: string,
                 email: string,
                 phone: string,
                 viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MdDialogRef<ProfileComponent>;
    let config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ProfileComponent, config);

    dialogRef.componentInstance.userName = userName;
    dialogRef.componentInstance.firstName = firstName;
    dialogRef.componentInstance.lastName = lastName;
    dialogRef.componentInstance.email = email;
    dialogRef.componentInstance.phone = phone;

    return dialogRef.afterClosed();
  }
}
