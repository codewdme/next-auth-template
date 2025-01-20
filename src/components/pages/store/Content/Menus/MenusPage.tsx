"use client";

import { Input } from "@/components/ui/input";
import { MenusList } from "./MenusList";
import { CreateMenuDialog } from "./CreateMenuDialog";

export default function MenusPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Navigation Menus</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {` Manage your store's navigation structure`}
          </p>
        </div>
        <div className="flex gap-2">
          <CreateMenuDialog />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input placeholder="Search menus..." className="sm:max-w-[300px]" />
        </div>
      </div>

      <MenusList />
    </div>
  );
}
