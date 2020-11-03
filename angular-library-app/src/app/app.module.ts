import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    window['renderLibrary'] = (elementId) => {
      document.getElementById(elementId).innerHTML = '<app-main></app-main>';
    };
  }

  // tslint:disable-next-line: typedef
  ngDoBootstrap() {
    customElements.define(
      'app-main',
      createCustomElement(AppComponent, { injector: this.injector })
    );
  }
}
