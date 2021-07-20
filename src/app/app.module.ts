import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import localEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'en'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
