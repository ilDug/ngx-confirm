import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxConfirmDirective } from 'ngx-confirm';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone:true,
    imports:[MatButtonModule, CommonModule, NgxConfirmDirective]
})
export class AppComponent implements OnInit {

    public confirmationMsg: string

    doSomething() {
        this.confirmationMsg = "You have confirmed!"
    }

    reset() {
        this.confirmationMsg = "Please, Confirm!";
    }

    ngOnInit(): void {
        this.reset();
    }
}
