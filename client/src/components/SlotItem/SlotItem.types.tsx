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

export interface ISlotItem {
  item: IItem;
  onClick?: () => void;
}
