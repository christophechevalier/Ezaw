// angular modules
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// rxjs
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss']
})
export class ProfileModuleComponent implements OnInit, OnDestroy {

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

  openProfile() {
    this.router.navigate(['/nav/profile']);
  }

}
