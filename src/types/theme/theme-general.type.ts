export type CSSPartial =
    | {
          background?: string;
          border: CSSStyleDeclaration["border"];
          borderColor?: never;
          borderWidth?: never;
          borderSize?: never;
          borderStyle?: never;
          borderRadius?: CSSStyleDeclaration["borderRadius"];
      }
    | {
          background?: string;
          border?: never;
          borderWidth?: `${number}px` | number;
          borderSize?: `${number}px` | number;
          borderColor?: string;
          borderStyle?: "solid" | "outset" | "inset" | "groove" | "double";
          borderRadius?: string;
      };

export type Sizes = {
    w?: number;
    h?: number;
};
