import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Package } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type StatisticsCard = {
  icon: React.ReactNode;
  title: string;
  value: string;
  previousValue?: string;
  timeFrame?: string;
  button?: React.ReactNode;
};

const stats: StatisticsCard[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    previousValue: "$41,120.81",
    timeFrame: "month",
  },
  {
    title: "New Customers",
    value: "2,350",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
    previousValue: "2,190",
    timeFrame: "month",
  },
  {
    title: "Total Orders",
    value: "1,234",
    icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    previousValue: "1,176",
    timeFrame: "month",
  },
  {
    title: "Products in Stock",
    value: "789",
    icon: <Package className="h-4 w-4 text-muted-foreground" />,
    previousValue: "805",
    timeFrame: "month",
  },
];

// You can simulate different sales data for each time period (today, week, month)
const salesData = {
  today: stats,
  week: stats,
  month: stats,
  all: stats,
};

export default function Stats() {
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
          {Object.entries(salesData).map(([period, data]) => (
            <TabsContent key={period} value={period} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((card) => {
                  const currentValue = parseFloat(
                    card.value.replace(/[^0-9.-]+/g, "")
                  );
                  const previousValue = card.previousValue
                    ? parseFloat(card.previousValue.replace(/[^0-9.-]+/g, ""))
                    : null;
                  const difference = previousValue
                    ? (
                        ((currentValue - previousValue) / previousValue) *
                        100
                      ).toFixed(1)
                    : null;
                  const isPositive = difference && parseFloat(difference) > 0;

                  return (
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
                          {card.previousValue ? (
                            <span
                              className={
                                isPositive ? "text-green-600" : "text-red-600"
                              }
                            >
                              {isPositive ? "+" : ""}
                              {difference}% from last {card.timeFrame}
                            </span>
                          ) : (
                            "."
                          )}
                        </p>
                        {card.button}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
