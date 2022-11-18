import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dag-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styles: [
    ]
})
export class ConfirmDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public message: string
    ) { }
}


