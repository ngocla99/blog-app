import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ProfileModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
