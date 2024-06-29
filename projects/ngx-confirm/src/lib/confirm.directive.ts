import { Directive } from '@angular/core';

@Directive({
    selector: '[ngxConfirm], [dagConfirm]',
    standalone: true
})
export class ConfirmDirective {

    constructor() { }

}
