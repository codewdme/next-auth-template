"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Package } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/lib/redux/hooks";

type TimeFrame = "today" | "week" | "month" | "all";

export default function Stats() {
  const analytics = useAppSelector((state) => state.analytics);

  const getStatsForPeriod = (period: TimeFrame) => [
    {
      title: "Total Revenue",
      value: `$${analytics.totalRevenue.toLocaleString()}`,
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
      growth: analytics.revenueGrowth,
      timeFrame: period,
    },
    {
      title: "New Customers",
      value: analytics.totalCustomers.toLocaleString(),
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      growth: analytics.customersGrowth,
      timeFrame: period,
    },
    {
      title: "Total Orders",
      value: analytics.totalOrders.toLocaleString(),
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
      growth: analytics.ordersGrowth,
      timeFrame: period,
    },
    {
      title: "Conversion Rate",
      value: `${analytics.conversionRate}%`,
      icon: <Package className="h-4 w-4 text-muted-foreground" />,
      growth: analytics.conversionGrowth,
      timeFrame: period,
    },
  ];

  const periods: TimeFrame[] = ["today", "week", "month", "all"];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="month" className="space-y-4">
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          {periods.map((period) => (
            <TabsContent key={period} value={period} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {getStatsForPeriod(period).map((card) => (
                  <Card key={card.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {card.title}
                      </CardTitle>
                      {card.icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{card.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span
                          className={
                            card.growth > 0 ? "text-green-600" : "text-red-600"
                          }
                        >
                          {card.growth > 0 ? "+" : ""}
                          {card.growth}% from last {card.timeFrame}
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
