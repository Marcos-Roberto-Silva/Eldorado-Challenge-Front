import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';

const appRoutes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    HeaderComponent,
    CategoriesComponent,
  ],
  imports: [
    CardModule,
    BrowserModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
