"use client";

import { Button } from "@/components/ui/button";
import { DiscountsList } from "./DiscountsList";
import { CreateDiscountDialog } from "./CreateDiscountDialog";
import { DiscountFilters } from "./DiscountFilters";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { setSelectedDiscounts } from "@/lib/redux/slices/discountsSlice";
import { RootState } from "@/lib/redux/store";

export default function DiscountsPage() {
  const selectedDiscounts = useAppSelector(
    (state: RootState) => state.discounts.selectedDiscounts
  );
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Discounts</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your store discounts and promotional offers
          </p>
        </div>
        <div className="flex w-full sm:w-auto">
          <CreateDiscountDialog />
        </div>
      </div>

      <div className="space-y-4">
        <DiscountFilters />
        <div className="overflow-x-auto rounded-lg border">
          <DiscountsList
            selectedDiscounts={selectedDiscounts}
            onSelectedDiscountsChange={(discounts) =>
              dispatch(setSelectedDiscounts(discounts))
            }
          />
        </div>
      </div>
    </div>
  );
}
