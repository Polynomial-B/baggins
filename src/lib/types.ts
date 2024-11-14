export type ItemsType = {
  id?: number;
  item: string;
  packed?: boolean;
};

export type ItemListProps = {
  items: ItemsType[];
};

export type SidebarProps = {
  handleAddItem?: (newItemText: string) => void;
  handleRemoveAllItems?: () => void;
  handleResetToInitial?: () => void;
  handleMarkAllComplete?: () => void;
  handleMarkAllIncomplete?: () => void;
};

export type ButtonProps = {
  children: React.ReactNode;
  buttonStyle?: string;
  onClick?: () => void;
};
