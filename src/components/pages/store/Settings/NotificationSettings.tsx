"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppSelector } from "@/lib/redux/hooks";
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";

export function NotificationSettings() {
  const settings = useAppSelector((state) => state.settings.notifications);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Channels</CardTitle>
          <CardDescription>
            Configure how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6" />
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive updates via email
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch id="email-enabled" checked={settings.email.enabled} />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Smartphone className="h-6 w-6" />
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get alerts via text message
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch id="sms-enabled" checked={settings.sms.enabled} />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Bell className="h-6 w-6" />
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Browser and mobile push notifications
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch id="push-enabled" checked={settings.push.enabled} />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Events</CardTitle>
          <CardDescription>
            Choose which events trigger notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Label className="font-medium">New Orders</Label>
                <p className="text-sm text-muted-foreground">
                  When a customer places a new order
                </p>
              </div>
              <Switch checked={settings.events.newOrder} />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label className="font-medium">Order Status Updates</Label>
                <p className="text-sm text-muted-foreground">
                  When an order status changes
                </p>
              </div>
              <Switch checked={settings.events.orderStatus} />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label className="font-medium">Low Stock Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  When product inventory is running low
                </p>
              </div>
              <Switch checked={settings.events.lowStock} />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <Label className="font-medium">Customer Messages</Label>
                <p className="text-sm text-muted-foreground">
                  When customers send new messages
                </p>
              </div>
              <Switch checked={settings.events.customerMessage} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Message Templates</CardTitle>
          <CardDescription>
            Customize notification messages for different events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="orderConfirmation">Order Confirmation</Label>
              <Textarea
                id="orderConfirmation"
                defaultValue={settings.templates.orderConfirmation}
                placeholder="Enter order confirmation message template"
                className="min-h-[100px]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="shippingUpdate">Shipping Update</Label>
              <Textarea
                id="shippingUpdate"
                defaultValue={settings.templates.shippingUpdate}
                placeholder="Enter shipping update message template"
                className="min-h-[100px]"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
        <Button variant="outline" className="w-full sm:w-auto">
          Cancel
        </Button>
        <Button className="w-full sm:w-auto">Save Changes</Button>
      </div>
    </div>
  );
}
