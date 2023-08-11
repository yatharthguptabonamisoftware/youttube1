import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginformComponent } from './loginform/loginform.component';
 import { FormsModule } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import { RouterModule } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import {MatCardModule} from '@angular/material/card';


import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,

    LoginformComponent,
    
    
    SignuppageComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
 
    ContentComponent,
    AppComponent,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    CdkMenu, 
    CdkMenuItem, 
    MatCardModule,
    CdkMenuTrigger,
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgFor,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'loginform', component:LoginformComponent},
        {path:'signupform',component:SignuppageComponent},
        {path:'home' , 
        canActivate:[authGuard],
        component:HomeComponent},
        
      ]
    )
    
  ],
  providers: [], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
