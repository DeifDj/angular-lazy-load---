import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
    // Otros componentes aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // Otros módulos aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
