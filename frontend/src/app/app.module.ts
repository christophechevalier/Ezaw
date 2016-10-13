// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

// environments for our app
import { environment } from '../environments/environment';

// angular-material2 modules
import { MaterialModule } from '@angular/material';

// angular-translate
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';

// ngrx - store
import { StoreModule } from '@ngrx/store';

// our effects
import { UserEffects } from './shared-module/effects/user.effects';

// our reducers
import { UserReducer } from './shared-module/reducers/user.reducer';
import { ConfigReducer } from './shared-module/reducers/config.reducer';

// our services
import { UserService } from './shared-module/services/user.service';

// our mocks
import { UserMockService } from './shared-module/mocks/user-mock.service';

// our components
import { AppComponent } from './app.component';

// features module
import { FeatureModule } from './features-module/features-module.module';

// shared module
import { SharedModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FeatureModule,
    FormsModule,

    // ngrx - store
    StoreModule.provideStore({
      config: ConfigReducer,
      user: UserReducer
    }),

    // material design
    MaterialModule.forRoot(),

    // translate
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
  ],
  providers: [
    UserEffects,
    {
      provide: UserService,
      useClass: (environment.mock ? UserMockService : UserService)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
