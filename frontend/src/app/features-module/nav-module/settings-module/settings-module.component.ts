// angular modules
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings-module',
  templateUrl: './settings-module.component.html',
  styleUrls: ['./settings-module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsModuleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => { });
  }

  openSettings() {
    this.router.navigate(['/nav/settings']);
  }
}
