import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToDoLijstComponent } from './to-do-lijst/to-do-lijst.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CalculatorComponent,
    ToDoLijstComponent,
    TestComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    CardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
