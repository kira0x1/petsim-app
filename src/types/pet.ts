export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  forms: [{ name: string; url: string }];
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?: string;
  };
  evolutions?: any;
}
