import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/includes/navbar/navbar.component";
import { MenuComponent } from "./components/includes/menu/menu.component";
import { PostsComponent } from "./components/includes/posts/posts.component";
import { PostsInputComponent } from "./components/includes/posts/posts.input.component";

import { DetailsComponent } from "./components/includes/details/details.component";

import { TimelineComponent } from "./components/pages/timeline/timeline.component";
import { ContactsComponent } from "./components/pages/contacts/contacts.component";
import { MessagesComponent } from "./components/pages/messages/messages.component";
import { AuthComponent } from "./components/pages/auth/auth.component";
import { HomeComponent } from "./components/pages/home/home.component";

import { routing } from "./app.routing";

// Services
import { AppService } from "./app.service";
import { AuthService } from "./components/pages/auth/auth.service";
import { NavService } from './components/includes/navbar/navbar.service';
import { DetailsService } from './components/includes/details/details.service';


@NgModule({
    declarations: [
        AppComponent,
        TimelineComponent,
        ContactsComponent,
        AuthComponent,
        NavbarComponent,
        MenuComponent,
        MessagesComponent,
        HomeComponent,
        PostsComponent,
        DetailsComponent,
        PostsInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    bootstrap: [AppComponent],
    providers: [AuthService, NavService, AppService]
})
export class AppModule {

}