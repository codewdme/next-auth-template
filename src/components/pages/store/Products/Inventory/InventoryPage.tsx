import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StockAdjustmentDialog } from "./StockAdjustmentDialog";
import { InventoryList } from "./InventoryList";

export default function InventoryPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Inventory</h1>
        <div className="flex gap-2">
          <StockAdjustmentDialog />
        </div>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          type="text"
          placeholder="Search inventory..."
          className="w-full sm:max-w-sm"
        />
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="secondary" className="flex-1 sm:flex-none">
            Filter by Stock Level
          </Button>
          <Button variant="secondary" className="flex-1 sm:flex-none">
            Filter by Location
          </Button>
        </div>
      </div>

      <InventoryList />

      <div className="mt-4">
        <Button variant="secondary" asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    </div>
  );
}
