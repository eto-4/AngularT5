import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/name';

  private paisSubject = new BehaviorSubject<any>(null);
  private errorSubject = new BehaviorSubject<boolean>(false);

  pais$ = this.paisSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  buscarPais(nom: string) {
    this.errorSubject.next(false);
    this.paisSubject.next(null);

    this.http.get<any>(`${this.apiUrl}/${nom}?fullText=true`).subscribe({
      next: (res) => this.paisSubject.next(res[0]),
      error: () => this.errorSubject.next(true)
    });
  }
}