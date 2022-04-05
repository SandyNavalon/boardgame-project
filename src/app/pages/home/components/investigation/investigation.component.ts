import { Component, OnInit } from '@angular/core';
import { faBiohazard, faDiceD20, faGhost, faHeart } from '@fortawesome/free-solid-svg-icons';
import { BoardgameRecommendation } from '../../models/boardgame-recommend.model';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent implements OnInit {

   /* ICONS */
   faghost = faGhost;
   fadice20 = faDiceD20;
   fabiohazard = faBiohazard;
   faheart = faHeart

  public boardgameListInvestigation: BoardgameRecommendation[];
  constructor() { }

  ngOnInit(): void {
    this.boardgameListInvestigation = [
      {
        id : "4G32qGJZWs",
        name : "Arkham Horror: The Card Game",
        price :  22.99 ,
        year_published : 2016,
        min_players : 1,
        max_players : 2,
        min_playtime : 60,
        max_playtime : 120,
        min_age : 14,
        description : "<p>Something evil stirs in Arkham; and only you can stop it.</p>\r\n<p>Blurring the traditional lines between roleplaying and card game experiences; <strong>Arkham Horror: The Card Game</strong> is the living card game of love craft I an mystery, monsters, and madness!</p>\r\n<p>You and your friend (or up to three friends with two core sets) become characters within the quiet new England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult. No matter what compels you, no matter what haunts you, you'll find both your strengths and weaknesses reflected in your custom deck of cards, and these cards will be your resources as you work with your friends to unravel the world's most terrifying mysteries.</p>\r\n<p>Meanwhile, each of your adventures in Arkham Horror: The Card Game carries you deeper into mystery. You'll find cultists and foul rituals. You'll find haunted houses and strange creatures. And you may find signs of the ancient ones straining against the barriers to our world… the basic mode of play in Arkham Horror: The Card Game is not the adventure, but the campaign. You might be scarred by your adventures, your sanity may be strained, and you may alter Arkham's landscape, burning buildings to the ground.</p>\r\n<p>All your choices and actions have consequences that reach far beyond the immediate resolution of the scenario at hand. And your actions may earn you valuable experience with which you can better prepare yourself for the adventures that still lie before you.</p>",
        thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257204681-515mUPxEHZL.jpg",
        description_preview: " Something evil stirs in Arkham, and only you can stop it. \r\n Blurring the traditional lines between roleplaying and card game experiences,  Arkham Horror: The Card Game  is the living card game of love craft I an mystery, monsters, and madness! \r\n You and your friend (or up to three friends with two core sets) become characters within the quiet new England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult. No matter what compels you, no matter what haunts you, you'll find both your strengths and weaknesses reflected in your custom deck of cards, and these cards will be your resources as you work with your friends to unravel the world's most terrifying mysteries. \r\n Meanwhile, each of your adventures in Arkham Horror: The Card Game carries you deeper into mystery. You'll find cultists and foul rituals. You'll find haunted houses and strange creatures. And you may find signs of the ancient ones straining against the barriers to our world… the basic mode of play in Arkham Horror: The Card Game is not the adventure, but the campaign. You might be scarred by your adventures, your sanity may be strained, and you may alter Arkham's landscape, burning buildings to the ground. \r\n All your choices and actions have consequences that reach far beyond the immediate resolution of the scenario at hand. And your actions may earn you valuable experience with which you can better prepare yourself for the adventures that still lie before you. "
    },
    {
      id : "y56td93iXw",
      name : "Dead of Winter: A Crossroads Game",
      price :  40.00 ,
      year_published : 2014,
      min_players : 2,
      max_players : 5,
      min_playtime : 45,
      max_playtime : 210,
      min_age : 14,
      description : "<p>Dead of Winter puts 2-5 players together in a small, weakened colony of survivors in a world where most of humanity are either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.<br /><br />Dead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition--but for each individual player to achieve victory, they must also complete their personal secret objective. This secret objective could relate to a psychological tick that's fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or worst of all: vengeance against the colony! Certain games could end with all players winning, some winning and some losing, or all players losing. Work toward the group's goal but don't get walked all over by a loudmouth who's only looking out for their own interests!</p>",
      thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1574700781988",
      description_preview: " Dead of Winter puts 2-5 players together in a small, weakened colony of survivors in a world where most of humanity are either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.  Dead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition--but for each individual player to achieve victory, they must also complete their personal secret objective. This secret objective could relate to a psychological tick that's fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or worst of all: vengeance against the colony! Certain games could end with all players winning, some winning and some losing, or all players losing. Work toward the group's goal but don't get walked all over by a loudmouth who's only looking out for their own interests! "
  },
  {
    id : "3RVcHxhPEZ",
    name : "Betrayal at House on the Hill",
    price :  27.99 ,
    year_published : 2004,
    min_players : 3,
    max_players : 6,
    min_playtime : 60,
    max_playtime : 72,
    min_age : 12,
    description : "<p>The creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back - this and more can be found in <strong>Betrayal at House on the Hill</strong>. This fun and suspenseful game is a new experience almost every time you play - you and your friends explore ''that creepy old place on the hill'' until enough mystic misadventures happen that one of the players turns on all of the others!</p>\r\n<p>Features multiple scenarios, a different lay-out with every game, and enough chills to freeze the heart of any horror fan.</p>\r\n<p>Betrayal at House on the Hill is a tile game that allows players to build their own haunted house room by room, tile by tile, creating a new thrilling game board every time. The game is designed for three to six people, each of whom plays one of six possible characters.</p>\r\n<p>Secretly, one of the characters betrays the rest of the party, and the innocent members of the party must defeat the traitor in their midst before it’s too late! Betrayal at House on the Hill will appeal to any game player who enjoys a fun, suspenseful, and strategic game.</p>\r\n<p>Betrayal at House on the Hill includes detailed game pieces, including character cards, pre-painted plastic figures, and special tokens, all of which help create a spooky atmosphere and streamline game play.</p>\r\n<p>An updated reprint of Betrayal at House on the Hill was released on October 5, 2010.</p>",
    thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1595268779978",
    description_preview: " The creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back - this and more can be found in  Betrayal at House on the Hill . This fun and suspenseful game is a new experience almost every time you play - you and your friends explore ''that creepy old place on the hill'' until enough mystic misadventures happen that one of the players turns on all of the others! \r\n Features multiple scenarios, a different lay-out with every game, and enough chills to freeze the heart of any horror fan. \r\n Betrayal at House on the Hill is a tile game that allows players to build their own haunted house room by room, tile by tile, creating a new thrilling game board every time. The game is designed for three to six people, each of whom plays one of six possible characters. \r\n Secretly, one of the characters betrays the rest of the party, and the innocent members of the party must defeat the traitor in their midst before it’s too late! Betrayal at House on the Hill will appeal to any game player who enjoys a fun, suspenseful, and strategic game. \r\n Betrayal at House on the Hill includes detailed game pieces, including character cards, pre-painted plastic figures, and special tokens, all of which help create a spooky atmosphere and streamline game play. \r\n An updated reprint of Betrayal at House on the Hill was released on October 5, 2010. "
  },
  {
    id : "Zspd2nNHfz",
    name : "Mansions of Madness: Second Edition",
    price :  99.99 ,
    year_published : 2016,
    min_players : 1,
    max_players : 5,
    min_playtime : 120,
    max_playtime : 180,
    min_age : 14,
    description : "<div>\r\n<p><strong>Mansions of Madness: Second Edition</strong> is a fully co-operative, app-driven board game of horror and mystery for one to five players that takes place in the same universe as Eldritch Horror and Elder Sign. </p>\r\n<p>The monster figures in <em>Mansions of Madness: Second Edition</em> are set on the same bases as the Arkham Horror Premium Figures and those featured in the first edition of Mansions of Madness. These bases allow you to slide information tokens underneath them, so you have quick and easy access to the monsters' traits and abilities. Because of the consistency between editions, you can seamlessly incorporate your first edition and painted minis into your new game, expanding the possibilities of your game and further immersing you in the bone-chilling happenings that have befallen Arkham's residents.</p>\r\n<p>In the <em>Mansions of Madness: Second Edition</em> companion app, you will have the option to incorporate some or all of your old components. Whether you have the first edition and its expansions or just one of the products, you can still incorporate it into your game. Each product you add to your collection will allow you to play as that game's investigators, introduce the possibility for those monsters to spawn, include a few new people to encounter, and widen the pool of maps the app could generate for your chosen scenario. If you decide to play without certain expansions or add more to your collection, you can always go back and change your collection within the app, thereby altering the possible combinations of monsters, maps, and investigators.</p>\r\n</div>",
    thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254973792-51Z2Bp88KhgL.jpg",
    description_preview: " \r\n  Mansions of Madness: Second Edition  is a fully co-operative, app-driven board game of horror and mystery for one to five players that takes place in the same universe as Eldritch Horror and Elder Sign.  \r\n The monster figures in  Mansions of Madness: Second Edition  are set on the same bases as the Arkham Horror Premium Figures and those featured in the first edition of Mansions of Madness. These bases allow you to slide information tokens underneath them, so you have quick and easy access to the monsters' traits and abilities. Because of the consistency between editions, you can seamlessly incorporate your first edition and painted minis into your new game, expanding the possibilities of your game and further immersing you in the bone-chilling happenings that have befallen Arkham's residents. \r\n In the  Mansions of Madness: Second Edition  companion app, you will have the option to incorporate some or all of your old components. Whether you have the first edition and its expansions or just one of the products, you can still incorporate it into your game. Each product you add to your collection will allow you to play as that game's investigators, introduce the possibility for those monsters to spawn, include a few new people to encounter, and widen the pool of maps the app could generate for your chosen scenario. If you decide to play without certain expansions or add more to your collection, you can always go back and change your collection within the app, thereby altering the possible combinations of monsters, maps, and investigators. \r\n "
  },
  {
    id : "ZwlnfX1J2z",
    name : "Eldritch Horror",
    price :  59.95 ,
    year_published : 2013,
    min_players : 1,
    max_players : 8,
    min_playtime : 120,
    max_playtime : 240,
    min_age : 14,
    description : "<p>Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. Foul monsters, brutal encounters, and obscure mysteries will take you to your limit and beyond. All the while, you and your fellow investigators must unravel the otherworldy mysteries scattered around the globe in order to push back the gathering mayhem that threatens to overwhelm humanity. The end draws near! Do you have the courage to prevent global destruction? <br /><br />Eldritch Horror is a cooperative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One - an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature.<br /><br />Discover the true name of Azathoth or battle Cthulhu on the high seas. With twelve unique investigators, two hundred-fifty tokens, and over three hundred cards, Eldritch Horror presents an epic, world-spanning adventure with each and every game.</p>",
    thumb_url : "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254957620-61KqujHT2B4L.jpg",
    description_preview: " Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. Foul monsters, brutal encounters, and obscure mysteries will take you to your limit and beyond. All the while, you and your fellow investigators must unravel the otherworldy mysteries scattered around the globe in order to push back the gathering mayhem that threatens to overwhelm humanity. The end draws near! Do you have the courage to prevent global destruction?   Eldritch Horror is a cooperative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One - an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature.  Discover the true name of Azathoth or battle Cthulhu on the high seas. With twelve unique investigators, two hundred-fifty tokens, and over three hundred cards, Eldritch Horror presents an epic, world-spanning adventure with each and every game. "
  },
  {
    id : "jYcMsxI5zP",
    name : "Horrified",
    price :  44.99 ,
    year_published : 2019,
    min_players : 1,
    max_players : 5,
    min_playtime : 60,
    max_playtime : 0,
    min_age : 10,
    description : "<p>The stakes have been raised. Imagine living in a place so wretched that it's not plagued by one, two, or even three monsters — but seven of the most horrifying fiends!</p>\r\n<p>In this game, you'll come face to face with them all as you work together to rid the town of the maniacal or misunderstood creatures…before it's too late.</p>\r\n<p><strong>Horrified</strong> includes high-quality sculpted miniatures (Frankenstein, The Bride of Frankenstein, The Wolf Man, Dracula, The Mummy, The Invisible Man, Creature from the Black Lagoon). Its innovative, easy-to-learn, cooperative gameplay has players working together against the monsters with varying levels of difficulty. Just as each monster is unique, they require different strategies and tactics to be defeated.</p>",
    thumb_url : "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/horrified-board-game.jpg?v=1611090329",
    description_preview: " The stakes have been raised. Imagine living in a place so wretched that it's not plagued by one, two, or even three monsters — but seven of the most horrifying fiends! \r\n In this game, you'll come face to face with them all as you work together to rid the town of the maniacal or misunderstood creatures…before it's too late. \r\n  Horrified  includes high-quality sculpted miniatures (Frankenstein, The Bride of Frankenstein, The Wolf Man, Dracula, The Mummy, The Invisible Man, Creature from the Black Lagoon). Its innovative, easy-to-learn, cooperative gameplay has players working together against the monsters with varying levels of difficulty. Just as each monster is unique, they require different strategies and tactics to be defeated. "
  },

    ]
  }

}
