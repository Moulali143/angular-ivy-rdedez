import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './signup/signup.component';
import{ReactiveFormsModule} from'@angular/forms';
import { LoginComponent } from './login/login.component';
import { BookserviceService } from './bookservice.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RoutingModule ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookserviceService]
})
export class AppModule { }
