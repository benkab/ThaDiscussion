import { Routes, RouterModule } from "@angular/router";
import { TimelineComponent } from "./components/pages/timeline/timeline.component";
import { ContactsComponent } from "./components/pages/contacts/contacts.component";
import { MessagesComponent } from "./components/pages/messages/messages.component";
import { AuthComponent } from "./components/pages/auth/auth.component";
import { HomeComponent } from "./components/pages/home/home.component";



const APP_ROUTES: Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'auth',
        component: AuthComponent
    },
    {
        path : 'timeline',
        component: TimelineComponent
    },
    {
        path : 'contacts',
        component: ContactsComponent
    },
    {
        path : 'messages',
        component: MessagesComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
