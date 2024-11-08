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
  item: string;
  setItem: Dispatch<SetStateAction<ItemsType[]>>;
};
