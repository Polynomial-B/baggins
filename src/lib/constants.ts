import { ItemsType } from "./types";

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
    item: "A woolen blanket",
    packed: false,
  },
];

export const secondaryButtons: string[] = [
  "Mark all completed",
  "Mark all incompleted",
  "Revert to initial items",
  "Remove all items",
];
