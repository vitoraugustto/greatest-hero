export interface IRow {
  vCenter?: boolean;
  hCenter?: boolean;
  flexWrap?: boolean;
  gap?: number;
  bgColor?: string;
  children: React.ReactElement | React.ReactElement[];
}
