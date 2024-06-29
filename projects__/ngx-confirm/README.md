# ngx-confirm

[![Publish Node.js Package](https://github.com/ilDug/ngx-confirm/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-confirm/actions/workflows/npm-publish.yml)

A mat-dialog to get cofirmations. Bind it to a button.

[Demo](https://ildug.github.io/ngx-confirm/)

## Installation

```
npm i @ildug/ngx-confirm
```


## Usage

import the diretive into your component:

``` typescript
...
import { NgxConfirmDirective } from 'ngx-confirm';
...

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone:true,
    imports:[ ...,  NgxConfirmDirective]
})
export class AppComponent {

    ....

    doSomething() {
        ....
    }

}


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
