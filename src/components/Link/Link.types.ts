export interface ILink {
  to: string;
  state?: object;
  children: React.ReactElement | React.ReactElement[];
}
