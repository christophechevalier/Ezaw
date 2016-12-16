// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

// http interceptor
import { provideInterceptorService } from 'ng2-interceptors';

// environments for our app
import { environment } from '../environments/environment';

// angular-material2 modules
import { MaterialModule } from '@angular/material';

// angular-translate
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';

// ngrx
import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// our effects
import { UserEffects } from './shared-module/effects/user.effects';

// store freeze
import { storeFreeze } from 'ngrx-store-freeze';

// our reducers
import { UserReducer } from './shared-module/reducers/user.reducer';
import { ConfigReducer } from './shared-module/reducers/config.reducer';
// import { NavigationReducer } from './shared-module/reducers/navigation.reducer';

// our services
import { UserService } from './shared-module/services/user.service';
import { HttpResponseInterceptor } from './shared-module/services/http-response-interceptor.service';
import { RouteService } from './shared-module/services/route.service';
import { MarkerService } from './shared-module/services/marker.service';
import { DialogsService } from './shared-module/services/dialogs.service';
// import { NavigationService } from './shared-module/services/navigation.service';

// our mocks
import { UserMockService } from './shared-module/mocks/user-mock.service';

// our components
import { AppComponent } from './app.component';

// features module
import { FeatureModule } from './features-module/features-module.module';

// shared module
import { SharedModule } from './shared-module/shared-module.module';

// opaque tokens
import { AVAILABLE_LANGUAGES } from './shared-module/opaque-tokens/opaque-tokens';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

// define a meta reducer that prevent object mutation when dev env
const metaReducers = !environment.production ? [storeFreeze, combineReducers] : [combineReducers];

const store = compose(...metaReducers)({
    config: ConfigReducer,
    user: UserReducer,
    // navigation: NavigationReducer
});

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
    StoreModule.provideStore(store),

    // ngrx
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    // effects
    EffectsModule.runAfterBootstrap(UserEffects),

    // translate
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    }),

    // material design
    MaterialModule.forRoot(),
  ],
  providers: [
    // http interceptors
    HttpResponseInterceptor,
    provideInterceptorService([
      HttpResponseInterceptor
    ]),

    // services
    RouteService,
    DialogsService,
    MarkerService,
    // NavigationService,
    {
      provide: UserService,
      useClass: (environment.mock ? UserMockService : UserService)
    },
    {
      provide: AVAILABLE_LANGUAGES,
      useValue: ['en', 'fr']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
