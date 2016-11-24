// angular modules
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileModuleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => { });
  }

  openProfile() {
    this.router.navigate(['/nav/profile']);
  }

}
