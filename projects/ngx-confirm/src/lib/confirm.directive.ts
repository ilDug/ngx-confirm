import { Directive, inject, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Directive({
    selector: '[ngxConfirm], [dagConfirm]',
    standalone: true,
    host: {
        '(click)': 'openDialog()', // listener per l'evento click
        '[style.cursor]': '"pointer"' // imposta il cursore a "pointer" quando si passa sopra l'elemento
    }
})
export class ConfirmDirective {
    private dialog = inject(MatDialog);
    ngxConfirm = input<string>(null, { alias: 'dagConfirm' }); //messaggio di conferma
    confirm = output<boolean>(); //emette un valore booleano che triggera l'azione passata 

    openDialog() {
        this.dialog.open(ConfirmDialogComponent, { data: this.ngxConfirm })
            .afterClosed()
            .subscribe(
                res => res ? this.confirm.emit(true) : null
            )
    }
}
