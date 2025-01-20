"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MenuItemsList } from "./MenuItemsList";

interface MenuItem {
  id: number;
  name: string;
  type: string;
  url: string;
}

export function CreateMenuDialog() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<MenuItem[]>([]);

  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: Date.now(),
      name: "",
      type: "link",
      url: "",
    };
    setItems([...items, newItem]);
  };

  const updateMenuItem = (id: number, updates: Partial<MenuItem>) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const removeMenuItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add menu creation logic here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Menu</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Menu</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Menu Name</Label>
              <Input id="name" placeholder="Enter menu name" required />
            </div>

            <div>
              <Label>Menu Items</Label>
              <MenuItemsList
                items={items}
                onUpdate={updateMenuItem}
                onRemove={removeMenuItem}
              />
              <Button
                type="button"
                variant="outline"
                onClick={addMenuItem}
                className="mt-2"
              >
                Add Menu Item
              </Button>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="draft">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Menu</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
