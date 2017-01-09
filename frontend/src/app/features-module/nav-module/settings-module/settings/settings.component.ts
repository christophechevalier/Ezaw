// angular modules
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';

// translate
import { TranslateService } from 'ng2-translate';

// rxjs
import { Subscription } from 'rxjs';

// our actions
import { ConfigActions } from '../../../../shared-module/reducers/config.actions';

// our interfaces
import { IConfigRecord, IConfig } from '../../../../shared-module/interfaces/config.interface';
import { IStore } from '../../../../shared-module/interfaces/store.interface';

// opaque tokens
import { AVAILABLE_LANGUAGES } from '../../../../shared-module/opaque-tokens/opaque-tokens';

/*import { MdDialogRef } from '@angular/material';*/

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy, OnInit {

  private config: IConfig;
  private configSub: Subscription;
  private lang: string;

  constructor(
    private store$: Store<IStore>,
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(AVAILABLE_LANGUAGES) private availableLanguages: string
  ) {
    this.configSub =
      store$.select('config')
        .map((configR: IConfigRecord) => configR.toJS())
        .subscribe((config: IConfig) => this.config = config);

    this.lang = this.translate.currentLang;
  }

  ngOnInit() {
    this.route.params.subscribe(params => { });
  }

  ngOnDestroy() {
    this.configSub.unsubscribe();
  }

  toggleTheme() {
    this.store$.dispatch({type: `TOGGLE_THEME`});
  }

  changeLanguageTo(lang) {
    this.lang = lang || this.lang;
    this.translate.use(this.lang);
  }

  openNavigation() {
    this.router.navigate(['/nav/navigation']);
  }

}
