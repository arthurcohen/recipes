import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { RecipesPage } from '../pages/recipes/recipes';
import { ShoppingListService } from '../services/shopping-list';
import { NewRecipePage } from '../pages/new-recipe/new-recipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShoppingListPage,
    RecipesPage,
    NewRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShoppingListPage,
    RecipesPage,
    NewRecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService
  ]
})
export class AppModule {}
