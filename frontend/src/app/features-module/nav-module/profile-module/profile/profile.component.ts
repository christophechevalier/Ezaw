import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public userName: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;

  constructor(public dialogRef: MdDialogRef<ProfileComponent>) {

  }
}
