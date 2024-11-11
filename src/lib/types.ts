export type ItemsType = {
  id?: number;
  item: string;
  packed?: boolean;
};

export type ItemListProps = {
  items: ItemsType[];
};

export type SidebarProps = {
  handleAddItem: (newItem: ItemsType) => void;
};
