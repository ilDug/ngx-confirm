import { Directive, EventEmitter, HostListener, Input, OnDestroy, Output, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Directive({
    selector: '[dagConfirm]'
})
export class ConfirmDirective {
    constructor(
        private dialog: MatDialog
    ) { }

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
