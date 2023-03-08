export type Loading = 'idle' | 'pending' | 'succeeded' | 'failed';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface IPaletteColor {
  300: Color;
  main: Color;
  500: Color;
  600: Color;
  700: Color;
}

export interface IAsyncAction {
  loading: Loading;
  error?: string;
}

export interface IHero {
  name: string;
  role: string;
  gold: number;
  status: {
    attack: number;
    defense: number;
    hp: number;
    maxHp: number;
    attackSpeed: number;
  };
  inventory: IItem[];
  equipment: IItem[];
}

export interface IEnemy {
  name: string;
  status: {
    attack: number;
    defense: number;
    hp: number;
    maxHp: number;
    attackSpeed: number;
  };
}

export interface ICombat {
  damageTaken: number;
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

export interface IOption {
  label: string;
  onClick: () => void;
}
