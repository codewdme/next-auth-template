"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StoreSettings } from "./StoreSettings";
import { PaymentSettings } from "./PaymentSettings";
import { ShippingSettings } from "./ShippingSettings";
import { NotificationSettings } from "./NotificationSettings";
import { TeamSettings } from "./TeamSettings";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your store preferences and configurations
        </p>
      </div>

      <Tabs defaultValue="store" className="space-y-4">
        <div className="w-full overflow-auto">
          <TabsList className="inline-flex h-auto p-1 w-full sm:w-auto">
            <TabsTrigger value="store" className="py-2 px-3 whitespace-nowrap">
              Store
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="py-2 px-3 whitespace-nowrap"
            >
              Payment
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="py-2 px-3 whitespace-nowrap"
            >
              Shipping
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="py-2 px-3 whitespace-nowrap"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger value="team" className="py-2 px-3 whitespace-nowrap">
              Team
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="store" className="space-y-4">
          <StoreSettings />
        </TabsContent>
        <TabsContent value="payment" className="space-y-4">
          <PaymentSettings />
        </TabsContent>
        <TabsContent value="shipping" className="space-y-4">
          <ShippingSettings />
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings />
        </TabsContent>
        <TabsContent value="team" className="space-y-4">
          <TeamSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
