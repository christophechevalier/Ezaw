import { Injectable, ViewContainerRef } from '@angular/core';

// ngrx - observable
import { Observable } from 'rxjs/Rx';

import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

// component


@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MdDialogRef<ConfirmDialogComponent>;
    let config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ConfirmDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
