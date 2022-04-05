import { Subscription } from 'rxjs';
import { BoardgamesService } from './boardgames.service';
import { Component, OnInit } from '@angular/core';
import { ApiDataBoardgameModel } from './models/boardgame.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.scss']
})

export class BoardgamesComponent implements OnInit {

  faheart = faHeart

  /* img_url: string = 'https://m.media-amazon.com/images/I/61glTil83nS._AC_SY355_.jpg';
  name: string = 'Catan';
  year_published: number = 1995;
  price: number = 37; */

  //finder
  public boardgameFound: ApiDataBoardgameModel;

  //for subscriptions
  private routeSub: Subscription;

  constructor(
    private boardgamesService: BoardgamesService,

  ) { }

  ngOnInit(): void {
  }

  handleSearch(boardgameName: string): void{
    /* console.log(boardgameName); */
    this.getBoardgame(boardgameName);

  }

  getBoardgame(boardgameName: string) {
    this.routeSub = this.boardgamesService.getBoardgameByName(boardgameName).subscribe((data: ApiDataBoardgameModel) => {
      console.log(data);
      this.boardgameFound = data;
    } )
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
