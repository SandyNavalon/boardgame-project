import { Component, OnInit } from '@angular/core';
import { faDungeon, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { BoardgameRecommendation } from '../../models/boardgame-recommend.model';

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.scss']
})
export class CrawlerComponent implements OnInit {
  /* ICONS */
  fadungeon = faDungeon;
  faskullcrossbones = faSkullCrossbones;

  public boardgameListCrawler: BoardgameRecommendation[]

  constructor() { }

  ngOnInit(): void {
    this.boardgameListCrawler = [
      {
        id : "dLwpSD01m3",
        name : "Dungeon Raiders",
        price :  20.00 ,
        year_published : 2011,
        min_players : 3,
        max_players : 5,
        min_playtime : 20,
        max_playtime : 30,
        min_age : 8,
        description : "<p>In <strong>Dungeon Raiders</strong> each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game.</p>\r\n<p>The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster!</p>\r\n<p>In this new release of <em>Dungeon Raiders</em> we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end.</p>\r\n<p>The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down.</p>",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1554409392711",
        description_preview: " In  Dungeon Raiders  each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game. \r\n The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster! \r\n In this new release of  Dungeon Raiders  we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end. \r\n The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down. "
      },
      {
        id : "dLwpSD01m3",
        name : "Dungeon Raiders",
        price :  20.00 ,
        year_published : 2011,
        min_players : 3,
        max_players : 5,
        min_playtime : 20,
        max_playtime : 30,
        min_age : 8,
        description : "<p>In <strong>Dungeon Raiders</strong> each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game.</p>\r\n<p>The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster!</p>\r\n<p>In this new release of <em>Dungeon Raiders</em> we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end.</p>\r\n<p>The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down.</p>",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1554409392711",
        description_preview: " In  Dungeon Raiders  each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game. \r\n The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster! \r\n In this new release of  Dungeon Raiders  we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end. \r\n The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down. "
      },
      {
        id : "dLwpSD01m3",
        name : "Dungeon Raiders",
        price :  20.00 ,
        year_published : 2011,
        min_players : 3,
        max_players : 5,
        min_playtime : 20,
        max_playtime : 30,
        min_age : 8,
        description : "<p>In <strong>Dungeon Raiders</strong> each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game.</p>\r\n<p>The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster!</p>\r\n<p>In this new release of <em>Dungeon Raiders</em> we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end.</p>\r\n<p>The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down.</p>",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1554409392711",
        description_preview: " In  Dungeon Raiders  each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game. \r\n The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster! \r\n In this new release of  Dungeon Raiders  we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end. \r\n The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down. "
      },
      {
        id : "dLwpSD01m3",
        name : "Dungeon Raiders",
        price :  20.00 ,
        year_published : 2011,
        min_players : 3,
        max_players : 5,
        min_playtime : 20,
        max_playtime : 30,
        min_age : 8,
        description : "<p>In <strong>Dungeon Raiders</strong> each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game.</p>\r\n<p>The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster!</p>\r\n<p>In this new release of <em>Dungeon Raiders</em> we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end.</p>\r\n<p>The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down.</p>",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1554409392711",
        description_preview: " In  Dungeon Raiders  each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game. \r\n The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster! \r\n In this new release of  Dungeon Raiders  we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end. \r\n The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down. "
      },
      {
        id : "dLwpSD01m3",
        name : "Dungeon Raiders",
        price :  20.00 ,
        year_published : 2011,
        min_players : 3,
        max_players : 5,
        min_playtime : 20,
        max_playtime : 30,
        min_age : 8,
        description : "<p>In <strong>Dungeon Raiders</strong> each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game.</p>\r\n<p>The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster!</p>\r\n<p>In this new release of <em>Dungeon Raiders</em> we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end.</p>\r\n<p>The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down.</p>",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1554409392711",
        description_preview: " In  Dungeon Raiders  each player takes the role of a different adventurer. You will have to join forces to survive the dungeon, but only one of you will get out with the most treasure and win the game. \r\n The dungeon is different each time you play, so its dangers like deadly traps and terrible monsters will always surprise you on your path to swag and riches. After pushing your luck to gain the most treasure, the adventurers will face the strongest and most horrendous boss monster! \r\n In this new release of  Dungeon Raiders  we have made major changes. The wound system no longer counts down from a wound total instead players will gain wounds as the day goes on. This has removed player elimination so no player is out of the game until the very end. \r\n The dungeon set up has also changed in this new edition. No longer do players have to shuffle half the face up into the half face down. It is now based on a separate dungeon deck that shows players which cards to have face up, and which cards will be face down. "
      },
    ]
  }

}
