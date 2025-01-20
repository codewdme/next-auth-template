"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/lib/redux/hooks";
import { Bell, Moon, Globe, Clock } from "lucide-react";

export function Preferences() {
  const preferences = useAppSelector((state) => state.profile.preferences);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Choose how you want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5" />
              <div>
                <Label className="font-medium">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates and alerts via email
                </p>
              </div>
            </div>
            <Switch checked={preferences.emailNotifications} />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5" />
              <div>
                <Label className="font-medium">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications in your browser
                </p>
              </div>
            </div>
            <Switch checked={preferences.pushNotifications} />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5" />
              <div>
                <Label className="font-medium">Marketing Communications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive product updates and promotional offers
                </p>
              </div>
            </div>
            <Switch checked={preferences.marketingEmails} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Display Settings</CardTitle>
          <CardDescription>Customize your viewing experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Moon className="h-5 w-5" />
              <div>
                <Label className="font-medium">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
            </div>
            <Switch checked={preferences.darkMode} />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Globe className="h-5 w-5" />
              <div>
                <Label className="font-medium">Language</Label>
                <p className="text-sm text-muted-foreground">
                  Select your preferred language
                </p>
              </div>
            </div>
            <Select defaultValue={preferences.language}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5" />
              <div>
                <Label className="font-medium">Time Zone</Label>
                <p className="text-sm text-muted-foreground">
                  Set your local time zone
                </p>
              </div>
            </div>
            <Select defaultValue={preferences.timezone}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="EST">Eastern Time</SelectItem>
                <SelectItem value="CST">Central Time</SelectItem>
                <SelectItem value="PST">Pacific Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
        <Button variant="outline" className="w-full sm:w-auto">
          Cancel
        </Button>
        <Button className="w-full sm:w-auto">Save Preferences</Button>
      </div>
    </div>
  );
}
