import { Directive, EventEmitter, HostListener, Input, Output, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Directive({
    selector: '[dagConfirm]',
    standalone: true,
})
export class NgxConfirmDirective {
    dialog = inject(MatDialog)

    @Input() dagConfirm: string;
    @Output() confirm = new EventEmitter();

    @HostListener('click')
    public openDialog() {
        this.dialog.open(ConfirmDialogComponent, { data: this.dagConfirm })
            .afterClosed()
            .subscribe(
                res => res ? this.confirm.emit(true) : null
            )
    }
}
