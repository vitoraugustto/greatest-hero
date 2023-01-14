import 'styled-components';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

declare module 'styled-components' {
  interface DefaultTheme {
    name: string;
    colors: {
      background: { emphasized: Color; notEmphasized: Color };
      font: Color;
      border: Color;
      title: Color;
      gold: Color;
    };
  }
}
