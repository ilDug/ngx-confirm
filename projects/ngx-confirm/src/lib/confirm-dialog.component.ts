import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dag-confirm-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, CommonModule],
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent  {
    message: string = inject(MAT_DIALOG_DATA);
}


