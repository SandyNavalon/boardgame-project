import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBoardgameByName (name: string): Observable<any> {
    return this.httpClient.get(`https://api.boardgameatlas.com/api/search?name=${name}&client_id=xTMWhyJlCd`);
  }
}
