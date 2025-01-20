"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface SessionDetailsDialogProps {
  session: {
    id: string;
    location: string;
    device: string;
    currentPage: string;
    timeSpent: Date;
    status: string;
    activities: {
      id: number;
      type: string;
      description: string;
      timestamp: Date;
    }[];
  };
}

export function SessionDetailsDialog({ session }: SessionDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Session Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Visitor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span>{session.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Device</span>
                <span>{session.device}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Page</span>
                <span className="max-w-[300px] truncate">
                  {session.currentPage}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time Spent</span>
                <span>
                  {formatDistanceToNow(session.timeSpent, { addSuffix: true })}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Session Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] overflow-y-auto pr-4">
                <div className="space-y-4">
                  {session.activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        {activity.type}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(activity.timestamp, {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
