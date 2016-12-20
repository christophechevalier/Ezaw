// angular modules
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// rxjs
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-settings-module',
  templateUrl: './settings-module.component.html',
  styleUrls: ['./settings-module.component.scss']
})
export class SettingsModuleComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub =
      this.route.params.subscribe(params => { 
        
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  openSettings() {
    this.router.navigate(['/nav/settings']);
  }
}
