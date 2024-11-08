import { Dispatch, SetStateAction } from "react";

export type ItemsType = {
  id?: number;
  item: string;
  packed?: boolean;
};

export type ItemListProps = {
  items: ItemsType[];
};

export type SidebarProps = {
  itemText: string;
  setItemText: Dispatch<SetStateAction<ItemsType[]>>;
};
