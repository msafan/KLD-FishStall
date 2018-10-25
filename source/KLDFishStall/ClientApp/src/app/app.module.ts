import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, } from 'angular-6-social-login-v2';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageFishCategoryComponent } from './manage-fish-category/manage-fish-category.component';
import { ManageFishPriceComponent } from './manage-fish-price/manage-fish-price.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { TruncateString } from './truncate-string.service';
import { AddFishComponent } from './add-fish/add-fish.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('2188347224710963')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('817457529289-o2ul09vsp8crt38i0qiun17u1upk3n6s.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    LocateUsComponent,
    LoginComponent,
    LogoutComponent,
    ManageFishCategoryComponent,
    ManageFishPriceComponent,
    NavMenuComponent,
    RegisterComponent,
    ShopComponent,
    TruncateString,
    AddFishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'locate-us', component: LocateUsComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'manage-fish-category', component: ManageFishCategoryComponent },
      { path: 'manage-fish-price', component: ManageFishPriceComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'add-fish', component: AddFishComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE5Tc1kO3RHG7ANTqbPuf84FKRcQACVBk'
    }),
    AngularDualListBoxModule,
    SocialLoginModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
