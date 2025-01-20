"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { useAppSelector } from "@/lib/redux/hooks";
import { CreditCard, Paypal, Wallet } from "lucide-react";

export function PaymentSettings() {
  const settings = useAppSelector((state) => state.settings.payment);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>
            Configure accepted payment methods for your store
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <CreditCard className="h-6 w-6" />
              <div>
                <p className="font-medium">Credit Card Payments</p>
                <p className="text-sm text-muted-foreground">
                  Accept Visa, Mastercard, and other major cards
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch id="stripe-enabled" checked={settings.stripe.enabled} />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Paypal className="h-6 w-6" />
              <div>
                <p className="font-medium">PayPal</p>
                <p className="text-sm text-muted-foreground">
                  Accept payments through PayPal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch id="paypal-enabled" checked={settings.paypal.enabled} />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Wallet className="h-6 w-6" />
              <div>
                <p className="font-medium">Digital Wallets</p>
                <p className="text-sm text-muted-foreground">
                  Apple Pay, Google Pay, and other digital wallets
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch
                id="wallets-enabled"
                checked={settings.digitalWallets.enabled}
              />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Currency Settings</CardTitle>
          <CardDescription>
            Configure how prices are displayed and processed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="processingCurrency">Processing Currency</Label>
              <Select defaultValue={settings.processingCurrency}>
                <SelectTrigger id="processingCurrency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                  <SelectItem value="JPY">JPY (¥)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="roundingMethod">Price Rounding</Label>
              <Select defaultValue={settings.roundingMethod}>
                <SelectTrigger id="roundingMethod">
                  <SelectValue placeholder="Select rounding method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Rounding</SelectItem>
                  <SelectItem value="up">Round Up</SelectItem>
                  <SelectItem value="down">Round Down</SelectItem>
                  <SelectItem value="nearest">Nearest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction Settings</CardTitle>
          <CardDescription>
            Configure transaction limits and processing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="minAmount">Minimum Transaction Amount</Label>
              <Input
                id="minAmount"
                type="number"
                defaultValue={settings.minTransactionAmount}
                placeholder="0.00"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="maxAmount">Maximum Transaction Amount</Label>
              <Input
                id="maxAmount"
                type="number"
                defaultValue={settings.maxTransactionAmount}
                placeholder="10000.00"
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
