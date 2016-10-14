import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import {MdDialog, MdDialogConfig} from '@angular/material';
import {ProfileComponent} from './profile/profile.component';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileModuleComponent implements OnInit {

  constructor(private dialog: MdDialog, private vcr: ViewContainerRef) { }

  ngOnInit() {
  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(ProfileComponent, config);
  }

}
