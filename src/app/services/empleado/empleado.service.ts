import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Empleado } from '@/interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor() { }

  private serverUrl = 'assets/data/empleados.json'
  private http = inject(HttpClient)

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.serverUrl);
  }
}