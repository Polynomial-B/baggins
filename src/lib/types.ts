export type InitialItems = {
  id?: number;
  item: string;
  packed: boolean;
};

export type ItemListProps = {
  items: InitialItems[];
};

export type ItemProps = {
  item: string;
  setItem: (value: string) => void;
};
