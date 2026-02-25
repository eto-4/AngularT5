import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaisService } from '../Services/pais2.service';

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pais2.html',
  styleUrls: ['./pais2.css']
})
export class Pais2Component implements OnInit {
  paisosSelect = ['Spain', 'France', 'Japan', 'Brazil', 'Germany'];

  paisSeleccionat: string = '';
  paisInput: string = '';

  dades: any = null;
  error: boolean = false;

  constructor(private paisService: PaisService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.paisService.pais$.subscribe(dades => {
      this.dades = dades;
      this.cdr.detectChanges();
    });

    this.paisService.error$.subscribe(error => {
      this.error = error;
      this.cdr.detectChanges();
    });
  }

  getIdiomes(languages: any): string {
    if (!languages) return 'Desconegut';
    return Object.values(languages).join(', ');
  }

  onSelectChange() {
    if (this.paisSeleccionat) {
      this.paisService.buscarPais(this.paisSeleccionat);
    }
  }

  onInputBuscar() {
    if (this.paisInput.trim()) {
      this.paisService.buscarPais(this.paisInput.trim());
    }
  }
}