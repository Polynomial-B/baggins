import { SetStateAction } from "react";

export type ItemsType = {
  id: number;
  item: string;
  packed: boolean;
};

export type ItemElementProps = {
  item: string;
  id: number;
  packed: boolean;
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
};

export type ItemListProps = {
  items: ItemsType[];
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
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
export type CounterProps = {
  counterTotal: () => number;
  completed: () => number;
};

export type SortingOptionsType = {
  label: string;
  value: SetStateAction<SortType>;
};

export type SortType = "default" | "packed" | "unpacked";
