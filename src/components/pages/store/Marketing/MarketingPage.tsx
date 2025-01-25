"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowUpRight, Users, Zap } from "lucide-react";
import Link from "next/link";
import { CreateAutomationDialog } from "./Automations/CreateAutomationDialog";
import { CreateCampaignDialog } from "./Campaigns/CreateCampaignDialog";
import { useAppSelector } from "@/lib/redux/hooks";
import { Automation } from "@/lib/redux/slices/automationsSlice";
import { Campaign } from "@/lib/redux/slices/(yet to configure)/campaignsSlice";

export default function MarketingPage() {
  const campaigns = useAppSelector((state) => state.campaigns.campaigns);
  const automations = useAppSelector((state) => state.automations.automations);

  const stats = {
    campaigns: {
      total: campaigns.length,
      active: campaigns.filter((c) => c.status === "active").length,
      roi: calculateTotalROI(campaigns),
    },
    automations: {
      total: automations.length,
      active: automations.filter((a) => a.status === "active").length,
      conversionRate: calculateAverageConversionRate(automations),
    },
  };

  const recentCampaigns = campaigns.slice(0, 2);
  const recentAutomations = automations.slice(0, 2);

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Marketing</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your campaigns and automations to boost customer engagement
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <CreateAutomationDialog />
          <CreateCampaignDialog />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Campaigns
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.campaigns.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.campaigns.active} active campaigns
            </p>
            <div className="text-sm text-green-600 mt-2">
              {stats.campaigns.roi} total ROI
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Automations
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.automations.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.automations.active} active automations
            </p>
            <div className="text-sm text-green-600 mt-2">
              {stats.automations.conversionRate} conversion rate
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="min-h-[300px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Campaigns</CardTitle>
            <Link href="/store/marketing/campaigns">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="sm:hidden">
                View
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex flex-col sm:flex-row justify-between gap-2 py-4 border-b last:border-0"
                >
                  <div>
                    <div className="font-medium">{campaign.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {campaign.clicks.toLocaleString()} clicks •{" "}
                      {campaign.conversions.toLocaleString()} conversions
                    </div>
                  </div>
                  <div className="text-sm text-green-600">{campaign.roi}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="min-h-[300px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Automations</CardTitle>
            <Link href="/store/marketing/automations">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="sm:hidden">
                View
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAutomations.map((automation) => (
                <div
                  key={automation.id}
                  className="flex flex-col sm:flex-row justify-between gap-2 py-4 border-b last:border-0"
                >
                  <div>
                    <div className="font-medium">{automation.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {automation.triggered.toLocaleString()} triggered •{" "}
                      {automation.completed.toLocaleString()} completed
                    </div>
                  </div>
                  <div className="text-sm">
                    {(
                      (automation.completed / automation.triggered) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function calculateTotalROI(campaigns: Campaign[]): string {
  const totalROI = campaigns
    .filter((c) => c.status === "active")
    .reduce((acc, campaign) => {
      const roiValue = parseFloat(campaign.roi);
      return isNaN(roiValue) ? acc : acc + roiValue;
    }, 0);

  return `+${totalROI.toFixed(1)}%`;
}

function calculateAverageConversionRate(automations: Automation[]): string {
  const activeAutomations = automations.filter((a) => a.status === "active");
  if (activeAutomations.length === 0) return "0%";

  const avgRate =
    (activeAutomations.reduce((acc, automation) => {
      return acc + automation.completed / automation.triggered;
    }, 0) /
      activeAutomations.length) *
    100;

  return `${avgRate.toFixed(1)}%`;
}
