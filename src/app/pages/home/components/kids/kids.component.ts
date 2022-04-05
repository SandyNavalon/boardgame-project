import { Component, OnInit } from '@angular/core';
import { faCookieBite, faFrog } from '@fortawesome/free-solid-svg-icons';
import { BoardgameRecommendation } from '../../models/boardgame-recommend.model';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  /* ICONS */
  facookie = faCookieBite;
  fafrog = faFrog;


  public boardgameListKids: BoardgameRecommendation[]

  constructor() { }

  ngOnInit(): void {
    this.boardgameListKids = [
      {
        id : "DMXoARqano",
        name : "Rory's Story Cubes: Moomin",
        price :  7.90 ,
        year_published : 2011,
        min_players : 1,
        max_players : 12,
        min_playtime : 20,
        max_playtime : 30,
        min_age : 6,
        description : "The storytelling possibilities with the Rory History Cubes Moomin are endless. there is only one rule: there are no wrong answers. 'the basket' icon could be a basket; it can also represent moominmama, a picnic, or even a bed for thingumy and Bob.",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545460634333",
        description_preview: "The storytelling possibilities with the Rory History Cubes Moomin are endless. there is only one rule: there are no wrong answers. 'the basket' icon could be a basket; it can also represent moominmama, a picnic, or even a bed for thingumy and Bob.",
      },

    ]
  }

}
