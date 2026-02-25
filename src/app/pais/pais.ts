import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaisService } from '../Services/pais.service';

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pais.html',
  styleUrls: ['./pais.css']
})
export class PaisComponent {
  paisosSelect = ['Spain', 'France', 'Japan', 'Brazil', 'Germany'];
  
  paisSeleccionat: string = '';
  paisInput: string = '';
  
  dades: any = null;
  error: boolean = false;

  constructor(private paisService: PaisService, private cdr: ChangeDetectorRef) {}

  buscarPais(nom: string) {
    this.error = false;
    this.dades = null;

    this.paisService.getPais(nom).subscribe({
      next: (res) => {
        this.dades = res[0];
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = true;
        this.cdr.detectChanges();
      }
    });
  }

  getIdiomes(languages: any): string {
    if (!languages) return 'Desconegut';
    return Object.values(languages).join(', ');
  }

  onSelectChange() {
    if (this.paisSeleccionat) {
      this.buscarPais(this.paisSeleccionat);
    }
  }

  onInputBuscar() {
    console.log('paisInput:', this.paisInput)
    if (this.paisInput.trim()) {
      this.buscarPais(this.paisInput.trim());
    }
  }
}