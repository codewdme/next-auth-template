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
import { Truck, Package, Globe, MapPin } from "lucide-react";

export function ShippingSettings() {
  const settings = useAppSelector((state) => state.settings.shipping);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Shipping Methods</CardTitle>
          <CardDescription>
            Configure available shipping options for your customers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Truck className="h-6 w-6" />
              <div>
                <p className="font-medium">Standard Shipping</p>
                <p className="text-sm text-muted-foreground">
                  5-7 business days delivery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch
                id="standard-enabled"
                checked={settings.standardShipping.enabled}
              />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Package className="h-6 w-6" />
              <div>
                <p className="font-medium">Express Shipping</p>
                <p className="text-sm text-muted-foreground">
                  1-2 business days delivery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch
                id="express-enabled"
                checked={settings.expressShipping.enabled}
              />
              <Button variant="outline" className="ml-auto">
                Configure
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <Globe className="h-6 w-6" />
              <div>
                <p className="font-medium">International Shipping</p>
                <p className="text-sm text-muted-foreground">
                  Worldwide delivery options
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Switch
                id="international-enabled"
                checked={settings.internationalShipping.enabled}
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
          <CardTitle>Shipping Zones</CardTitle>
          <CardDescription>
            Define shipping rates for different regions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {settings.shippingZones.map((zone, index) => (
              <div
                key={zone.id}
                className="flex flex-col sm:flex-row items-start justify-between gap-4 rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-medium">{zone.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {zone.countries.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full sm:w-auto">Add Shipping Zone</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Free Shipping Rules</CardTitle>
          <CardDescription>
            Configure conditions for free shipping
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="minAmount">Minimum Order Amount</Label>
              <Input
                id="minAmount"
                type="number"
                defaultValue={settings.freeShipping.minOrderAmount}
                placeholder="0.00"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eligibleCountries">Eligible Countries</Label>
              <Select defaultValue={settings.freeShipping.eligibleCountries}>
                <SelectTrigger id="eligibleCountries">
                  <SelectValue placeholder="Select countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="domestic">Domestic Only</SelectItem>
                  <SelectItem value="select">Select Countries</SelectItem>
                </SelectContent>
              </Select>
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
