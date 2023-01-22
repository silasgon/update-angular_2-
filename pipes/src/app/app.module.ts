import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { SettingsService } from './settings.service';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
/*     {
      provide: LOCALE_ID,
      useValue:'pt-BR'
    } */
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [ SettingsService ],
      useFactory: (settingsService:any) => settingsService.getLocale( )
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
