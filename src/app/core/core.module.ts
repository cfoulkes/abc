import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule.forChild(routes)
  ],
//  exports: [NavComponent, HomeComponent],
  exports: [NavComponent],
  declarations: [NavComponent, HomeComponent],
  providers: [LoggerService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}