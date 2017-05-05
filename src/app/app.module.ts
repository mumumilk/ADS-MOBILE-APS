import { Documentos } from './../pages/documentos/documentos';
import { Atividades } from './../pages/atividades/atividades';
import { Login } from './../pages/login/login';
import { FirebaseProvider } from './../providers/firebase-provider';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { Menu } from '../pages/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    Documentos,
    Atividades,
    Menu
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Documentos,
    Atividades,
    Menu
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
