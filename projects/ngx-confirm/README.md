# ngx-confirm

[![Publish Node.js Package](https://github.com/ilDug/ngx-confirm/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-confirm/actions/workflows/npm-publish.yml)

A mat-dialog to get cofirmations. Use it with a button.

[Demo](https://ildug.github.io/ngx-confirm/)

## Installation

```
npm i @ildug/ngx-confirm
```

## Usage

import the diretive into your component:

```typescript
...
import { NgxConfirmDirective } from '@ildug/ngx-confirm';
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

```html
<button ngxConfirm (confirm)="doSomething()">delete</button>

/* or pass a custom message*/
<button ngxConfirm="my message: Are your sure?" (confirm)="doSomething()">delete</button>
```

## Style

Be sure to,import Angular Material Theme, in order to get a nice behaviour.

```scss
@import "@angular/material/prebuilt-themes/azure-blue.css";
```

To style buttons , you have to define some class:

```scss

// with aphrodite-sass
.btn{...}
.btn-main{...}

// or alternatively
.ngx-confirm-btn{...}
.ngx-confirm-btn-main{...}
.ngx-confirm-btn-cancel{...}

```
