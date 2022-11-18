import { Directive, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { tap, take } from 'rxjs/operators';
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

    // ngOnDestroy() { this.sub.unsubscribe() }
    // private sub: Subscription;
}
