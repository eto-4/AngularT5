import { Injectable } from "@angular/core";
import { Cotxe } from "../../models/Cotxe";


@Injectable({
    providedIn: 'root'
})
export class CotxeService{
    private cotxes: Array<Cotxe> = [
        new Cotxe('Model S', 'Tesla', 125000 ,'negre', 120, 'electric'),
        new Cotxe('Civic', 'Honda', 250000 ,'blanc', 180, 'gasolina'),
        new Cotxe('Clio', 'Renault', 500000 ,'vermell', 140, 'diesel'),
        new Cotxe('Prius', 'Toyota', 250000 ,'gris', 250, 'hybrid')
    ];

    constructor() {}

    getCotxes(): Array<Cotxe> {
        return this.cotxes;
    }

    addCotxe(cotxe: Cotxe): void {
        this.cotxes.push(cotxe);
    }

    deleteCotxe(index: number): void {
        this.cotxes.splice(index, 1);
    }
}