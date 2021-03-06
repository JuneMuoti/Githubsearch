import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GithubComponent } from './github/github.component';
import {HttpModule} from '@angular/http';
import {GithubService} from './Services/github.service'
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepositoriesComponent,
    GithubComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
