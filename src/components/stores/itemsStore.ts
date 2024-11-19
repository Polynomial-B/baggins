import { create } from "zustand";
import { initialItems } from "../../lib/constants";
import { ItemsType } from "../../lib/types";

export const useItemsStore = create((set) => ({
  items: initialItems,
  addItem: (newItemText: string) => {
    const newItem: ItemsType = {
      id: Date.now(),
      item: newItemText,
      packed: false,
    };
    set((state) => {
      return { items: [...state.items, newItem] };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  toggleItem: (id: number) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
  markAllComplete: () => {
    set((state) => {
      const newItems: ItemsType[] = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newItems };
    });
  },
  markAllIncomplete: () => {
    set((state) => {
      const newItems: ItemsType[] = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: newItems };
    });
  },
}));
