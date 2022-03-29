import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {HttpclintM}
import { HttpClientModule } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';
//import { Camera } from '@ionic-native/camera';
//import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
//import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';
//import { IonicStorageModule } from '@ionic/storage'
import { IonicStorageModule } from '@ionic/storage-angular';
//import { HomePage } from './home.page'
import { HomePage } from './home/home.page';
import { RegandloginPage } from './regandlogin/regandlogin.page';
import { SpeechRecognition } from '@ionic-native/speech-recognition';





@NgModule({
  declarations: [AppComponent], //,HomePage,RegandloginPage
  entryComponents: [],
  imports: [
    //WebView
    IonicSelectableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //SpeechRecognition,
    
    //AngularFireDatabase,
    IonicStorageModule.forRoot({
      name: "mydatabase"
    }),
    FormsModule,
    HttpClientModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgbModule],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
    //Camera
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
