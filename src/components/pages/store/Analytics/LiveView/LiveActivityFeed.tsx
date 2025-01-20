"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

const activities = [
  {
    id: 1,
    type: "order",
    description: "New order #1234 from John Doe",
    location: "New York, USA",
    timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
  },
  {
    id: 2,
    type: "view",
    description: "Product page viewed: Blue T-Shirt",
    location: "London, UK",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
  },
  {
    id: 3,
    type: "cart",
    description: "Item added to cart: Red Shoes",
    location: "Toronto, Canada",
    timestamp: new Date(Date.now() - 8 * 60 * 1000), // 8 minutes ago
  },
];

export function LiveActivityFeed() {
  return (
    <Card className="divide-y">
      {activities.map((activity) => (
        <div key={activity.id} className="p-4">
          <div className="flex items-center justify-between mb-1">
            <Badge
              variant={
                activity.type === "order"
                  ? "default"
                  : activity.type === "cart"
                  ? "secondary"
                  : "outline"
              }
            >
              {activity.type}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
            </span>
          </div>
          <p className="text-sm">{activity.description}</p>
          <p className="text-sm text-muted-foreground">{activity.location}</p>
        </div>
      ))}
    </Card>
  );
}
