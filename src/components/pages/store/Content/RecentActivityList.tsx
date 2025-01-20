"use client";

import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

const recentActivity = [
  {
    id: 1,
    type: "metaobject",
    action: "updated",
    name: "Homepage Banner",
    date: "2024-03-10T10:00:00",
    user: "John Doe",
  },
  {
    id: 2,
    type: "file",
    action: "uploaded",
    name: "product-image-1.jpg",
    date: "2024-03-09T15:30:00",
    user: "Jane Smith",
  },
  {
    id: 3,
    type: "menu",
    action: "created",
    name: "Main Navigation",
    date: "2024-03-09T09:15:00",
    user: "Mike Johnson",
  },
];

export function RecentActivityList() {
  return (
    <Card className="divide-y">
      {recentActivity.map((activity) => (
        <div
          key={activity.id}
          className="p-4 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">
              {activity.name}{" "}
              <span className="text-muted-foreground">
                was {activity.action}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">by {activity.user}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {formatDate(activity.date)}
          </p>
        </div>
      ))}
    </Card>
  );
}
