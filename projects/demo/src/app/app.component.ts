import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
        <button mat-raised-button color="primary" dagConfirm="Are you Sure?" (confirm)="doSomething()">open</button>
        <p>{{result | json}}</p>
    </div>

  `,
    styles: []
})
export class AppComponent {
    result: boolean = false;

    doSomething() {
        this.result = !this.result
    }
}
