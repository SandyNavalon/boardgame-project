export interface BoardgameRecommendation{
  id: string;
  name: string;
  year_published: number;
  thumb_url: string;
  price: number;
  max_players: number;
  min_players: number;
  min_playtime: number;
  max_playtime: number;
  min_age: number;
  description_preview: string;
  description: string;
}

