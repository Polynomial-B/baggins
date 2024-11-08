import { ItemsType } from "./types";

export const initialItems: ItemsType[] = [
  {
    id: 1,
    item: "A sense of adventure",
    packed: true,
  },
  {
    id: 2,
    item: "A gold ring",
    packed: false,
  },
  {
    id: 3,
    item: "Lembas bread",
    packed: false,
  },
];

export const secondaryButtons: string[] = [
  "Mark all completed",
  "Mark all incompleted",
  "Revert to initial items",
  "Remove all items",
];
