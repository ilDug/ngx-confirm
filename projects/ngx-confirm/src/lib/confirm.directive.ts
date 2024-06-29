import { Directive, computed, inject, input, output } from '@angular/core';
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
export class NgxConfirmDirective {
    private dialog = inject(MatDialog);
    private readonly defaultMessage = 'Confirm the action';

    ngxConfirm = input<string>(null); //messaggio di conferma
    dagConfirm = input<string>(null); // vecchia direttiva per la compatibilità con la versione precedente

    message = computed(() => {
        return this.ngxConfirm() || this.dagConfirm() || this.defaultMessage;
    })

    confirm = output<boolean>(); //emette un valore booleano che triggera l'azione passata 

    openDialog() {
        this.dialog.open(ConfirmDialogComponent, { data: this.message() })
            .afterClosed()
            .subscribe(
                res => res ? this.confirm.emit(true) : null
            )
    }
}
