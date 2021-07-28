# ngx-confirm
A mat-dialog to get cofirmations. Bind it to a button.

## Installation

```
npm i @ildug/ngx-confirm
```


## Usage

import the module into main app

``` typescript
...
import { NgxConfirmModule } from 'ngx-confirm';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
...


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NgxConfirmModule,
        ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the directive into a button. Bind the confrim event to the method to trigger.

``` typescript

<button dagConfirm (confirm)="doSomething()">delete</button>

/* or pass a message*/
<button dagConfirm="my message: Are your sure?" (confirm)="doSomething()">delete</button>
``` 