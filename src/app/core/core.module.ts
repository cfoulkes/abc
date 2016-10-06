import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { routing } from '../app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    routing
  ],
//   exports: [NavComponent, SpinnerComponent],
//   declarations: [NavComponent, SpinnerComponent],
//   providers: [LoggerService, SpinnerService]
  exports: [NavComponent, HomeComponent],
  declarations: [NavComponent, HomeComponent],
  providers: [LoggerService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}