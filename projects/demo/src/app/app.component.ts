import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
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
