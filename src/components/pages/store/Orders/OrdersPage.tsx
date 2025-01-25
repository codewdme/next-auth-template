"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { EditOrderForm } from "./Drafts/EditOrderForm";
import { ViewOrderDialog } from "./Drafts/ViewOrderDialog";
import axios from "axios";
import { Order } from "@prisma/client";

// Sample order data

export default function OrdersPage() {
  const [dateRange, setDateRange] = useState("all");
  const [customDateRange, setCustomDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/fetch-orders");
        setOrders(response.data.data); // Assuming the API returns an array of orders
      } catch (err) {
        alert("Failed to fetch orders");
        console.error(err);
      } finally {
        console.log("data fetched");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <p className="text-gray-600 mb-8">Manage and view all your orders.</p>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Search orders..."
            className="max-w-sm"
          />
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="15days">Last 15 Days</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          {dateRange === "custom" && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {customDateRange.from ? (
                    customDateRange.to ? (
                      <>
                        {format(customDateRange.from, "LLL dd, y")} -{" "}
                        {format(customDateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(customDateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="range"
                  selected={customDateRange}
                  onSelect={setCustomDateRange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
        </div>
        <Button>Create Order</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order Number</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id.slice(0, 6)}...</TableCell>
              <TableCell>{order.customer?.name}</TableCell>
              <TableCell>{order.placedAt}</TableCell>
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Order {order.id}</DialogTitle>
                      <DialogDescription>
                        Make changes to the order details.
                      </DialogDescription>
                    </DialogHeader>
                    <EditOrderForm orderData={order} />
                  </DialogContent>
                </Dialog>
                <ViewOrderDialog order={order} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/store/orders/drafts">View Draft Orders</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/store/orders/abandoned-checkouts">
            View Abandoned Checkouts
          </Link>
        </Button>
      </div>
    </div>
  );
}
