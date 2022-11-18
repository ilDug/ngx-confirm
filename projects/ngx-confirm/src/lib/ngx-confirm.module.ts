import { NgModule } from '@angular/core';
import { ConfirmDirective } from './confirm.directive';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        ConfirmDirective,
        ConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule,

    ],
    exports: [
        ConfirmDirective
    ]
})
export class NgxConfirmModule { }
