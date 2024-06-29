import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'dag-confirm-dialog',
    standalone: true,
    imports: [MatDialogModule],
    templateUrl: './confirm-dialog.component.html',
    styles: `
        .btn + .btn {
            margin-left: 1rem;
        }
    `
})
export class ConfirmDialogComponent {
    message = inject(MAT_DIALOG_DATA);
}
