"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  ShoppingCart,
  Package,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";

export function HelpCenter() {
  const categories = [
    {
      title: "Orders",
      icon: ShoppingCart,
      description: "Managing orders and fulfillment",
      articles: [
        "How to process orders",
        "Handling refunds and returns",
        "Order status updates",
        "Bulk order processing",
      ],
    },
    {
      title: "Products",
      icon: Package,
      description: "Product management and inventory",
      articles: [
        "Adding new products",
        "Managing inventory",
        "Product variations",
        "Bulk product updates",
      ],
    },
    {
      title: "Payments",
      icon: CreditCard,
      description: "Payment processing and transactions",
      articles: [
        "Setting up payment methods",
        "Transaction fees",
        "Payment disputes",
        "Payout schedule",
      ],
    },
    {
      title: "Customers",
      icon: Users,
      description: "Customer management and support",
      articles: [
        "Customer accounts",
        "Customer groups",
        "Managing customer data",
        "Customer communications",
      ],
    },
    {
      title: "Settings",
      icon: Settings,
      description: "Store settings and configuration",
      articles: [
        "Store configuration",
        "Tax settings",
        "Shipping zones",
        "Email templates",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search help articles..." className="pl-9" />
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <HelpCircle className="h-4 w-4 mr-2" />
          Get Live Help
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <category.icon className="h-5 w-5" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ScrollArea className="h-[180px]">
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-left text-sm text-muted-foreground hover:text-primary"
                      >
                        {article}
                      </Button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
