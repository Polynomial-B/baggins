import { ItemsType, SortingOptionsType } from "./types";

export const initialItems: ItemsType[] = [
  {
    id: 1,
    item: "A gold ring",
    packed: false,
  },
  {
    id: 2,
    item: "Potatoes",
    packed: true,
  },
  {
    id: 3,
    item: "A woollen blanket",
    packed: false,
  },
];

export const sortingOptions: SortingOptionsType[] = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by completed",
    value: "completed",
  },
  {
    label: "Sort by incomplete",
    value: "incomplete",
  },
];
