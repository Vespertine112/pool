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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) {}

}
