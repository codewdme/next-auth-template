"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfo } from "./PersonalInfo";
import { SecuritySettings } from "./SecuritySettings";
import { Preferences } from "./Preferences";
import { ActivityLog } from "./ActivityLog";

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Profile Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="personal" className="space-y-4">
        <div className="w-full overflow-auto">
          <TabsList className="inline-flex h-auto p-1 w-full sm:w-auto">
            <TabsTrigger
              value="personal"
              className="py-2 px-3 whitespace-nowrap"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="py-2 px-3 whitespace-nowrap"
            >
              Security
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="py-2 px-3 whitespace-nowrap"
            >
              Preferences
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="py-2 px-3 whitespace-nowrap"
            >
              Activity Log
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="personal" className="space-y-4">
          <PersonalInfo />
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <SecuritySettings />
        </TabsContent>
        <TabsContent value="preferences" className="space-y-4">
          <Preferences />
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <ActivityLog />
        </TabsContent>
      </Tabs>
    </div>
  );
}
