// angular module
import { Component } from '@angular/core';

// ngrx - store
import { Store } from '@ngrx/store';

// our actions
import { SidenavActions } from '../../reducers/sidenav.actions';

// interfaces
import { IStore } from '../../interfaces/store.interface';

@Component({
  selector: 'app-markers-sidenav',
  templateUrl: './markers-sidenav.component.html',
  styleUrls: ['./markers-sidenav.component.scss']
})
export class MarkersSidenavComponent {

  constructor(private store$: Store<IStore>) { }

  toggleSidenavRight() {
    this.store$.dispatch({ type: `TOGGLE_SIDENAV_RIGHT` });
  }
}
