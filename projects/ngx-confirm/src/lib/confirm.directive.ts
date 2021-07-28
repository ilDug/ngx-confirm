import { Directive, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Directive({
    selector: '[dagConfirm]'
})
export class ConfirmDirective implements OnDestroy {
    constructor(
        private dialog: MatDialog
    ) { }

    @Input() dagConfirm: string;
    @Output() confirm = new EventEmitter();

    private sub: Subscription;

    @HostListener('click')
    public openDialog() {
        this.sub = this.dialog.open(ConfirmDialogComponent, { data: this.dagConfirm })
            .afterClosed()
            .subscribe(
                res => res ? this.confirm.emit(true) : null
            )
    }

    ngOnDestroy() { this.sub.unsubscribe() }
}
