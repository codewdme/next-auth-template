import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const abandonedCheckouts = [
  {
    id: 1,
    customer: "Alice Brown",
    items: "T-shirt (2), Jeans (1)",
    date: "2023-06-01",
    status: "Abandoned",
  },
  {
    id: 2,
    customer: "Charlie Wilson",
    items: "Sneakers (1), Socks (3)",
    date: "2023-06-02",
    status: "Abandoned",
  },
  {
    id: 3,
    customer: "David Lee",
    items: "Hoodie (1), Cap (1)",
    date: "2023-06-03",
    status: "Abandoned",
  },
];

export default function AbandonedCheckoutsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Abandoned Checkouts</h1>
      <p className="text-gray-600 mb-8">
        View abandoned checkouts and email customers a link to their cart.
      </p>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search abandoned checkouts..."
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Cart Items</TableHead>
            <TableHead>Date of Abandonment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {abandonedCheckouts.map((checkout) => (
            <TableRow key={checkout.id}>
              <TableCell>{checkout.customer}</TableCell>
              <TableCell>{checkout.items}</TableCell>
              <TableCell>{checkout.date}</TableCell>
              <TableCell>{checkout.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Send Cart Link
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4">
        <Button variant="outline" asChild>
          <Link href="/orders">Back to Orders</Link>
        </Button>
      </div>
    </div>
  );
}
