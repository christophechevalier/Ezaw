import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// ngrx - store
import { Store } from '@ngrx/store';

// our states
import { AppState } from '../../app.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-module.component.html',
  styleUrls: ['./auth-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthComponent implements OnInit {
  tabs: Array <{ title: string, url: string }>;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.tabs = [
      {
        title: 'Log In',
        url: 'login'
      },
      {
        title: 'Register',
        url: 'register'
      }
    ];
  }

  ngOnInit() {
    // TODO When users refresh the auth page, keep the same route turned
    this.route.params.subscribe(params => { });
  }

  openTab(index) {
    this.router.navigate(['/auth', this.tabs[index].url]);
  }
}
