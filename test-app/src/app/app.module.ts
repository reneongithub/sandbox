import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadbannerComponent } from './headbanner/headbanner.component';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component';
import { FooterComponent } from './footer/footer.component';
import { RbacloginComponent } from './rbaclogin/rbaclogin.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbannerComponent,
    WelcomeviewComponent,
    FooterComponent,
    RbacloginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
