import { IItem } from '@common/interfaces';

export interface ISlotItem {
  item: IItem;
  size?: 'small' | 'medium' | 'large';
  infos?: boolean;
  onClick?: (e: MouseEvent) => void;
}
