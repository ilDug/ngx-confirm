import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { AppComponent } from './app.component';
import { NgxConfirmModule } from 'ngx-confirm';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        NgxConfirmModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
