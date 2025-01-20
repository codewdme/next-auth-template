"use client";

import { MenuItem } from "./MenuItem";

interface MenuItemsListProps {
  items: {
    id: number;
    name: string;
    type: string;
    url: string;
  }[];
  onUpdate: (
    id: number,
    updates: Partial<MenuItemsListProps["items"][0]>
  ) => void;
  onRemove: (id: number) => void;
}

export function MenuItemsList({
  items,
  onUpdate,
  onRemove,
}: MenuItemsListProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
