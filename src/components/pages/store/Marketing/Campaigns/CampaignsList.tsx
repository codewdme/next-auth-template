"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { EditCampaignDialog } from "./EditCampaignDialog";
import { DeleteCampaignDialog } from "./DeleteCampaignDialog";
import { useAppSelector } from "@/lib/redux/hooks";
import { Card } from "@/components/ui/card";

import { formatDate } from "@/lib/utils";

interface CampaignsListProps {
  selectedCampaigns: string[];
  onSelectedCampaignsChange: (campaigns: string[]) => void;
}

export function CampaignsList({
  selectedCampaigns,
  onSelectedCampaignsChange,
}: CampaignsListProps) {
  const campaigns = useAppSelector((state) => state.campaigns.campaigns);
  // Mobile view card component
  const CampaignCard = ({
    campaign,
  }: {
    campaign: {
      id: string;
      name: string;
      type: string;
      status: "active" | "draft" | "archived";
      clicks: number;
      conversions: number;
      roi: string;
    };
  }) => (
    <Card className="p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="font-medium">{campaign.name}</div>
          <div className="text-sm text-muted-foreground">
            Type: {campaign.type}
          </div>
        </div>
        <Badge
          variant={
            campaign.status === "active"
              ? "default"
              : campaign.status === "draft"
              ? "secondary"
              : "outline"
          }
        >
          {campaign.status}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground">Clicks</div>
          <div>{campaign.clicks.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Conversions</div>
          <div>{campaign.conversions.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-muted-foreground">ROI</div>
          <div className="text-green-600">{campaign.roi}</div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <EditCampaignDialog campaign={campaign} />
        <DeleteCampaignDialog campaign={campaign} />
      </div>
    </Card>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedCampaigns.length === campaigns.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onSelectedCampaignsChange(campaigns.map((c) => c.id));
                    } else {
                      onSelectedCampaignsChange([]);
                    }
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Clicks</TableHead>
              <TableHead>Conversions</TableHead>
              <TableHead>ROI</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCampaigns.includes(campaign.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onSelectedCampaignsChange([
                          ...selectedCampaigns,
                          campaign.id,
                        ]);
                      } else {
                        onSelectedCampaignsChange(
                          selectedCampaigns.filter((id) => id !== campaign.id)
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell className="capitalize">{campaign.type}</TableCell>
                <TableCell>{formatDate(campaign.startDate)}</TableCell>
                <TableCell>{formatDate(campaign.endDate)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      campaign.status === "active"
                        ? "default"
                        : campaign.status === "draft"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </TableCell>
                <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                <TableCell>{campaign.conversions.toLocaleString()}</TableCell>
                <TableCell>{campaign.roi}</TableCell>
                <TableCell className="text-right space-x-2">
                  <EditCampaignDialog campaign={campaign} />
                  <DeleteCampaignDialog campaign={campaign} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </>
  );
}
