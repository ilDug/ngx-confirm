import { Component, OnInit } from '@angular/core';
import { NgxConfirmDirective } from 'ngx-confirm'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgxConfirmDirective],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
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
