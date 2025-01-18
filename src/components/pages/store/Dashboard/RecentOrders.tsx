import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const recentOrders = [
  {
    id: "1234",
    customer: "John Doe",
    status: "Processing",
    total: "$129.99",
  },
  {
    id: "1235",
    customer: "Jane Smith",
    status: "Shipped",
    total: "$79.99",
  },
  {
    id: "1236",
    customer: "Bob Johnson",
    status: "Delivered",
    total: "$199.99",
  },
  {
    id: "1237",
    customer: "Alice Brown",
    status: "Processing",
    total: "$59.99",
  },
  {
    id: "1238",
    customer: "Charlie Wilson",
    status: "Shipped",
    total: "$149.99",
  },
];

export default function RecentOrders() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>
          You have {recentOrders.length} orders this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
