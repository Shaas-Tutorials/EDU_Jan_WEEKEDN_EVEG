import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { ProductModule } from './products/product.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
    // We declare all Component & Pipe
    declarations: [
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
    ],
    // All Module
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home' , pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ]),
        HttpClientModule,
        ProductModule,
        MoviesModule
        // HttpModule
    ],

    // Only First Component
    bootstrap: [
        AppComponent
    ],
    // All Services
    providers: []
})
export class AppModule {
}
