import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import { MdDialog, MdDialogConfig } from '@angular/material';
import { ProfileComponent } from '../profile-module/profile/profile.component';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss'],
  providers: [MdDialog],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileModuleComponent implements OnInit {

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) { }

  ngOnInit() {
  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;

    this.dialog.open(ProfileComponent, config);
  }



}
