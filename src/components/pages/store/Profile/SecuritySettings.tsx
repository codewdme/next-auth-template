"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppSelector } from "@/lib/redux/hooks";
import { KeyRound, Smartphone, Shield } from "lucide-react";

export function SecuritySettings() {
  const security = useAppSelector((state) => state.profile.security);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password to keep your account secure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                placeholder="Enter current password"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button type="submit" className="w-full sm:w-auto">
                Update Password
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Smartphone className="h-6 w-6" />
              <div>
                <p className="font-medium">Authenticator App</p>
                <p className="text-sm text-muted-foreground">
                  Use an authenticator app to generate codes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch checked={security.twoFactorEnabled} />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Shield className="h-6 w-6" />
              <div>
                <p className="font-medium">Recovery Codes</p>
                <p className="text-sm text-muted-foreground">
                  Generate backup codes for account recovery
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              View Codes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login History</CardTitle>
          <CardDescription>
            Recent account activity and login attempts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {security.loginHistory.map((login, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between gap-2 pb-4 border-b last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <KeyRound className="h-5 w-5" />
                  <div>
                    <p className="font-medium">{login.location}</p>
                    <p className="text-sm text-muted-foreground">
                      {login.device} • {login.browser}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {login.timestamp}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
