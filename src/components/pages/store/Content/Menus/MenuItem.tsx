"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    type: string;
    url: string;
  };
  onUpdate: (id: number, updates: Partial<MenuItemProps["item"]>) => void;
  onRemove: (id: number) => void;
}

export function MenuItem({ item, onUpdate, onRemove }: MenuItemProps) {
  return (
    <div className="flex items-center gap-2 bg-card p-2 rounded-md border">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Input
          placeholder="Item name"
          value={item.name}
          onChange={(e) => onUpdate(item.id, { name: e.target.value })}
        />

        <Select
          value={item.type}
          onValueChange={(value) => onUpdate(item.id, { type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="submenu">Submenu</SelectItem>
            <SelectItem value="custom">Custom URL</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="URL"
          value={item.url}
          onChange={(e) => onUpdate(item.id, { url: e.target.value })}
        />
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(item.id)}
        className="text-destructive"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
