import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginRegisterComponent } from './topbar/login-register/login-register.component';
import { ProfileComponent } from './topbar/profile/profile.component';
import { NotificationComponent } from './topbar/notification/notification.component';
import { AichallengeComponent } from './topbar/aichallenge/aichallenge.component';
import { UploadalgorithmComponent } from './topbar/uploadalgorithm/uploadalgorithm.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { SidenavComponent } from './main-board/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginRegisterComponent,
    ProfileComponent,
    NotificationComponent,
    AichallengeComponent,
    UploadalgorithmComponent,
    MainBoardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule
  ],
  providers: [ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
