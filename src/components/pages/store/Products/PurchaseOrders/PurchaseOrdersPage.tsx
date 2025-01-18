import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreatePurchaseOrderDialog } from "./CreatePurchaseOrderDialog";
import { PurchaseOrderList } from "./PurchaseOrderList";

export default function PurchaseOrdersPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Purchase Orders</h1>
        <CreatePurchaseOrderDialog />
      </div>

      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          type="text"
          placeholder="Search purchase orders..."
          className="w-full sm:max-w-sm"
        />
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="secondary" className="flex-1 sm:flex-none">
            Filter by Status
          </Button>
          <Button variant="secondary" className="flex-1 sm:flex-none">
            Filter by Date
          </Button>
        </div>
      </div>

      <PurchaseOrderList />

      <div className="mt-4">
        <Button variant="secondary" asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    </div>
  );
}
