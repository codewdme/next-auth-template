import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ordersData = {
  pending: [
    { id: "ORD001", customer: "John Doe", total: "$129.99", status: "Pending" },
    {
      id: "ORD002",
      customer: "Jane Smith",
      total: "$79.99",
      status: "Pending",
    },
    {
      id: "ORD003",
      customer: "Bob Johnson",
      total: "$199.99",
      status: "Pending",
    },
  ],
  fulfilled: [
    {
      id: "ORD004",
      customer: "Alice Brown",
      total: "$59.99",
      status: "Fulfilled",
    },
    {
      id: "ORD005",
      customer: "Charlie Wilson",
      total: "$149.99",
      status: "Fulfilled",
    },
  ],
};

export default function OrdersOverview() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Orders Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Pending Orders</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordersData.pending.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Fulfilled Orders</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordersData.fulfilled.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
