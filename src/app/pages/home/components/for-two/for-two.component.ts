import { Component, OnInit } from '@angular/core';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { BoardgameRecommendation } from '../../models/boardgame-recommend.model';

@Component({
  selector: 'app-for-two',
  templateUrl: './for-two.component.html',
  styleUrls: ['./for-two.component.scss']
})
export class ForTwoComponent implements OnInit {
  /* ICONS */
  fahandpeace = faHandPeace;

  public boardgameListForTwo: BoardgameRecommendation[];

  constructor() { }

  ngOnInit(): void {
    this.boardgameListForTwo = [
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
        id: "eh0GTvESIX",
        name: "Jaipur",
        price: 24.99,
        year_published: 2009,
        min_players: 2,
        max_players: 2,
        min_playtime: 30,
        max_playtime: 42,
        min_age: 12,
        description: "<p>Jaipur, capital of Rajasthan. You are one of the two most powerful traders in the city.<br /><br />But that's not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the Maharaja's court.<br /><br />You are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.<br /><br />A card game for two seasoned traders!</p>",
        thumb_url: "https://s3.amazonaws.com/abecorn-item-images/5fb7461e967755003ca2289c.jpg",
        description_preview: " Jaipur, capital of Rajasthan. You are one of the two most powerful traders in the city.  But that's not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the Maharaja's court.  You are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.  A card game for two seasoned traders! ",
    },
    {
        id: "9iBOPn3lES",
        name: "Patchwork",
        price: 15.99,
        year_published: 2014,
        min_players: 2,
        max_players: 2,
        min_playtime: 15,
        max_playtime: 30,
        min_age: 8,
        description: "<p>Patchwork is a form of needlework that involves sewing together pieces of fabric into a larger design. In the past, it was a way to make use of leftover pieces of cloth to create clothing and quilts. Today, patchwork is a form of art, in which the designers use precious fabrics to create beautiful textiles. The use of uneven pieces of fabric in particular can result in real masterpieces and is therefore being practiced by a large number of textile artists.<br /><br />To create a beautiful quilt, however, requires effort and time, but the available patches just do not want to fit together. So choose your patches carefully and keep a healthy supply of buttons to not only finish your quilt, but to make it better and more beautiful than your opponent's.</p>",
        thumb_url: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/patchwork-board-game.jpg?v=1609629033",
        description_preview: " Patchwork is a form of needlework that involves sewing together pieces of fabric into a larger design. In the past, it was a way to make use of leftover pieces of cloth to create clothing and quilts. Today, patchwork is a form of art, in which the designers use precious fabrics to create beautiful textiles. The use of uneven pieces of fabric in particular can result in real masterpieces and is therefore being practiced by a large number of textile artists.  To create a beautiful quilt, however, requires effort and time, but the available patches just do not want to fit together. So choose your patches carefully and keep a healthy supply of buttons to not only finish your quilt, but to make it better and more beautiful than your opponent's. "
    },
    {
        id: "6FmFeux5xH",
        name: "Pandemic",
        price: 20.97,
        year_published: 2008,
        min_players: 2,
        max_players: 4,
        min_playtime: 45,
        max_playtime: 60,
        min_age: 8,
        description: "<p>After five years of Pandemic, hundreds of thousands of players have contracted the virus! To celebrate this milestone, Pandemic has been completely re-designed. With new artwork by Chris Quilliams (Clash of Cultures, Merchants &amp; Marauders), Pandemic will now have a more modern look, inside and outside the box. With two new characters (the Contingency Planner and the Quarantine Specialist) face the game in ways you never thought possible as brand-new, virulent challenges await you!</p>\r\n<p>In <em><strong>Pandemic</strong></em>, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.</p>\r\n<p>The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are <em>Epidemic!</em> cards that accelerate and intensify the diseases' activity. A second, separate deck of cards controls the &quot;normal&quot; spread of the infections.</p>\r\n<p>Taking a unique role within the team, players must plan their strategy to mesh with their specialists' strengths in order to conquer the diseases. For example, the Operations Expert can build research stations which are needed to find cures for the diseases and which allow for greater mobility between cities; the Scientist needs only four cards of a particular disease to cure it instead of the normal five—but the diseases are spreading quickly and time is running out. If one or more diseases spreads beyond recovery or if too much time elapses, the players all lose. If they cure the four diseases, they all win!</p>\r\n<p>The 2013 edition of <em>Pandemic</em> includes two new characters—the Contingency Planner and the Quarantine Specialist—not available in earlier editions of the game.</p>\r\n<h4>Artists:</h4>\r\n<p>Joshua Cappel (graphics and illustration)</p>\r\n<p>Régis Moulun (cover painting)</p>\r\n<p>Chris Quilliams (2013 edition)<br /><br /><br /></p>",
        thumb_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg",
        description_preview: " After five years of Pandemic, hundreds of thousands of players have contracted the virus! To celebrate this milestone, Pandemic has been completely re-designed. With new artwork by Chris Quilliams (Clash of Cultures, Merchants & Marauders), Pandemic will now have a more modern look, inside and outside the box. With two new characters (the Contingency Planner and the Quarantine Specialist) face the game in ways you never thought possible as brand-new, virulent challenges await you! \r\n In   Pandemic  , several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. \r\n The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are  Epidemic!  cards that accelerate and intensify the diseases' activity. A second, separate deck of cards controls the \"normal\" spread of the infections. \r\n Taking a unique role within the team, players must plan their strategy to mesh with their specialists' strengths in order to conquer the diseases. For example, the Operations Expert can build research stations which are needed to find cures for the diseases and which allow for greater mobility between cities; the Scientist needs only four cards of a particular disease to cure it instead of the normal five—but the diseases are spreading quickly and time is running out. If one or more diseases spreads beyond recovery or if too much time elapses, the players all lose. If they cure the four diseases, they all win! \r\n The 2013 edition of  Pandemic  includes two new characters—the Contingency Planner and the Quarantine Specialist—not available in earlier editions of the game. \r\n Artists: \r\n Joshua Cappel (graphics and illustration) \r\n Régis Moulun (cover painting) \r\n Chris Quilliams (2013 edition)    "
    },
    {
        id: "fDn9rQjH9O",
        name: "Terraforming Mars",
        price: 52.00,
        year_published: 2016,
        min_players: 1,
        max_players: 5,
        min_playtime: 90,
        max_playtime: 120,
        min_age: 12,
        description: "<p>In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level and the ocean coverage until the environment is habitable. In Terraforming Mars you play one of those corporations and work together in the terraforming process, but compete in doing the best work, with victory points awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar systems and other commendable achievements. The players acquire unique project cards, which represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, and establishing greenhouse gas industries to heat up the atmosphere. You compete for the best places for your city tiles, ocean tiles and greenery tiles. When the terraforming process is complete, the player corporation with the most victory points wins.</p>",
        thumb_url: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/terraforming-mars-board-game.jpg?v=1611091381",
        description_preview: " In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level and the ocean coverage until the environment is habitable. In Terraforming Mars you play one of those corporations and work together in the terraforming process, but compete in doing the best work, with victory points awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar systems and other commendable achievements. The players acquire unique project cards, which represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, and establishing greenhouse gas industries to heat up the atmosphere. You compete for the best places for your city tiles, ocean tiles and greenery tiles. When the terraforming process is complete, the player corporation with the most victory points wins. "
    }]
}


}



