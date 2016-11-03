import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';

// our service
import { DialogsService } from '../../../shared-module/services/dialogs.service';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileModuleComponent {

  public result: any;

  constructor(private dialogsService: DialogsService, private viewContainerRef: ViewContainerRef) { }

  public openDialog() {
    this.dialogsService
      .confirm('John Doe', 'John', 'Doe', 'johndoe@xxx.com', 'xx.xx.xx.xx.xx', this.viewContainerRef)
      .subscribe(res => this.result = res);
  }
}
