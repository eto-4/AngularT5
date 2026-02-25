import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/name';

  constructor(private http: HttpClient) {}

  getPais(nom: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${nom}?fullText=true`);
  }
}