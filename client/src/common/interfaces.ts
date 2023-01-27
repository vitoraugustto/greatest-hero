export type Loading = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface IHero {
  name: string;
  role: string;
  gold: number;
  status: {
    attack: number;
    defense: number;
    hp: number;
  };
  inventory: IItem[];
  equipment: IItem[];
}

export interface IItem {
  _id: string;
  name: string;
  image: string;
  status: {
    attack: number;
    defense: number;
  };
  gold: number;
  type: string;
}
