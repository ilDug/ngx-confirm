# ngx-confirm

[![Publish Node.js Package](https://github.com/ilDug/ngx-confirm/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-confirm/actions/workflows/npm-publish.yml)

A mat-dialog to get cofirmations. Bind it to a button.

[Demo](https://ildug.github.io/ngx-confirm/)

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

``` html

<button dagConfirm (confirm)="doSomething()">delete</button>

/* or pass a custom message*/
<button dagConfirm="my message: Are your sure?" (confirm)="doSomething()">delete</button>
``` 

To get a nice behaviour, import Angular Material Theme.

```scss
@import "../../../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";
```
