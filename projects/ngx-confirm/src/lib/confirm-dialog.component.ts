import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'dag-confirm-dialog',
    standalone: true,
    imports: [MatDialogModule],
    templateUrl: './confirm-dialog.component.html',
    styles: ``
})
export class ConfirmDialogComponent {
    message: string = inject(MAT_DIALOG_DATA);
}
