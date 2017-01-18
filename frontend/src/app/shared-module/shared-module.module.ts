// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// angular-material
import { MaterialModule } from '@angular/material';

// ngrx - store
import { StoreModule } from '@ngrx/store';

// ngrx - effects
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from 'ng2-translate';

// our services
import { DialogsService } from './services/dialogs.service';
import { MarkerService } from './services/marker.service';
import { NavigationService } from './services/navigation.service';

// our components
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MarkersSidenavComponent } from './components/markers-sidenav/markers-sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// our directives
import { EqualValidator } from './directives/equal-validator.directive';

const SHARED_COMPONENTS = [
  ConfirmDialogComponent,
  MarkersSidenavComponent,
  NotFoundComponent,
  EqualValidator
];

const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  HttpModule,
  RouterModule,
  MaterialModule,
  StoreModule,
  EffectsModule,
  TranslateModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES
  ],
  providers: [
    DialogsService,
    MarkerService,
    NavigationService
  ]
})
export class SharedModule { }
