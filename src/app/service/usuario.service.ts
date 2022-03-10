import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {
  }

   getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

   getStudent(id : any): Observable<any>{
      return this.http.get(AppConstants.baseUrl + id );
   }

   deletar(id : any): Observable<any>{
     return this.http.delete(AppConstants.baseUrl + id ,{responseType: 'text'});
   }

   consultaNome(nome: string): Observable<any>{
      return this.http.get(AppConstants.baseUrl + 'lista-por-nome/' + nome)
   }

   salvarUsuario(user : any): Observable<any>{
    return this.http.post<any>(AppConstants.baseUrl, user);
   }

   atualizarUsuario(user : any): Observable<any>{
    return this.http.put<any>(AppConstants.baseUrl, user);
   }

}
