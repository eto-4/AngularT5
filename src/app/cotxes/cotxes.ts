import { Component } from '@angular/core';
import { Cotxe } from '../Models/Cotxe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CotxeService } from '../Services/cotxe.service'


@Component({
  selector: 'app-cotxes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './cotxes.html',
  styleUrl: './cotxes.css',

  // Proveïdor (CotxeService)
  // providers: [CotxeService],
})
export class CotxesComponent {
  cotxes: Array<Cotxe> = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private _cotxeService: CotxeService
  ) {}

  ngOnInit() {
    // Carregar des del servei
    this.cotxes = this._cotxeService.getCotxes();

    // llegir paràmetres que venen de URL
    // Exemple: /cotxes?model=Golf&marca=VW&preu=20000&color=blau&velocitat=150&combustible=gasolina
    this.route.queryParams.subscribe(params => {
      if (params['model'] && params['marca']) {
        const cotxe = new Cotxe(
          params['model'],
          params['marca'],
          +params['preu'] || 0,
          params['color'] || 'desconegut',
          +params['velocitat'] || 0,
          params['combustible'] ||'desconegut'
        );

        this._cotxeService.addCotxe(cotxe);
      }
    });
  }
  
  // Propietats que estarán enllaçades al form.
  newModel: string = '';
  newMarca: string = '';
  newPreu: number = 0;
  newColor: string = '';
  newVelocitat: number = 0;
  newCombustible: string = '';

  addCotxe() {
    // Crear un nou cotxe fent servir el model
    const cotxe = new Cotxe(
      this.newModel,
      this.newMarca,
      this.newPreu,
      this.newColor,
      this.newVelocitat,
      this.newCombustible
    );

    // Afegir cotxe a cotxes
    this._cotxeService.addCotxe(cotxe);

    // reiniciar el form
    this.newModel = '';
    this.newMarca = '';
    this.newPreu = 0;
    this.newVelocitat = 0;
    this.newCombustible = '';
  }

  eliminarCotxe(index: number) {
    this._cotxeService.deleteCotxe(index);
  }
}