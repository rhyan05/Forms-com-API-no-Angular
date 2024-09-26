import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CepService {

  apiURL:string = 'https://viacep.com.br/ws' ;

  constructor( private http: HttpClient ) { }

  //método
  getCep( cep: string ) : Observable<any>  {

   const url = `${this.apiURL}/${cep}/json/` ;
   return this.http.get<any>(url) ;

  }

}
// ng g c components --skipTets