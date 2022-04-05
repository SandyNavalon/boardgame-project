import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiDataBoardgameModel } from './models/boardgame.model';

@Injectable()
export class BoardgamesService {
  boardgames: ApiDataBoardgameModel[];

  private _boardgameList: BehaviorSubject<ApiDataBoardgameModel[]> = new BehaviorSubject<ApiDataBoardgameModel[]>([]);

  constructor( private httpClient: HttpClient ) { }

  boardgameList(): Observable<ApiDataBoardgameModel[]> {
    return this._boardgameList.asObservable();
  }

  /* getBoardgameList(): Observable<any> {
    return this.httpClient.get(`https://api.boardgameatlas.com/api/search?&client_id=xTMWhyJlCd`).pipe(map((response: any) => {
      this._boardgameList.next(response.games);
    })
  )
} */

  getBoardgameByName(name: string): Observable<any> {
    return this.httpClient.get(`https://api.boardgameatlas.com/api/search?name=${name}&client_id=xTMWhyJlCd`)
/*     https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=xTMWhyJlCd
 */  }
}
