import { IHero, IItem } from './interfaces';

export const ASIDE_WIDTH = 256;

export const GENERIC_ERROR_MESSAGE =
  'Oops, algo deu errado. Por favor, tente novamente mais tarde.';

export const INIT_HERO: IHero = {
  name: '',
  role: '',
  gold: 0,
  status: {
    attack: 0,
    defense: 0,
    hp: 0,
    maxHp: 0,
  },
  inventory: [],
  equipment: [],
};

export const INIT_ITEM: IItem = {
  _id: '',
  name: '',
  image: '',
  status: { attack: 0, defense: 0 },
  gold: 0,
  type: '',
};
