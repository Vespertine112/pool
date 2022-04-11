import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PoolGenService {

  private genUrl = 'Http://localhost:4000/dbManage/';  // URL

  generatePool():Observable<string> {
    return this.http.post<string>(this.genUrl, {}, this.httpOptions).pipe(
      tap(_ => {
        console.log(`Got string from gen service ${_}`)
      }));
  }

  validatePool(id:string):Observable<string> {
    return this.http.get<string>(`${this.genUrl}?exists=${id}`, this.httpOptions).pipe(
      tap(_ => {
        console.log(`Received response from validation service`);
      })
    )
  }

  updatePool(poolObj:{}):Observable<string> {
    return this.http.patch<string>(this.genUrl, poolObj, this.httpOptions).pipe(
      tap(_ => {
        console.log(`Update Confirmed`)
      })
    )
  }

  retrievePool(id:string):Observable<string> {
    return this.http.get<string>(`${this.genUrl}?retrieve=${id}`, this.httpOptions).pipe(
      tap(_ => {
        console.log(`Received response from information service`);
      })
    )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) {}

}
