// angular module
import { Component } from '@angular/core';

// ngrx - store
import { Store } from '@ngrx/store';

// our actions
import { ConfigActions } from '../../reducers/config.actions';

// interfaces
import { IStore } from '../../interfaces/store.interface';

@Component({
  selector: 'app-toggle-sidenav',
  templateUrl: './toggle-sidenav.component.html',
  styleUrls: ['./toggle-sidenav.component.scss']
})
export class ToggleSidenavComponent {

  constructor(private store$: Store<IStore>) { }

  toggleSidenav() {
    this.store$.dispatch({ type: ConfigActions.TOGGLE_SIDENAV });
  }
}
