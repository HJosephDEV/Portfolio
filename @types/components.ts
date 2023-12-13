export type AppButtonProps = {
  buttonType: "black" | "secondary" | "white";
  full?: boolean;
};

export type SectionOneNavLinksProps = {
  direction?: "row" | "column";
};

export type NavMenuLinksNavbarProps = {
  itemsColor?: "primary" | "white";
  direction?: "row" | "column";
  event?: () => void;
};

export type StackiconComponentProps = {
  tecName: string;
};
