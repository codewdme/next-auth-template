"use client";

import { CampaignsList } from "./CampaignsList";
import { CreateCampaignDialog } from "./CreateCampaignDialog";
import { CampaignFilters } from "./CampaignFilters";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { setSelectedCampaigns } from "@/lib/redux/slices/(yet to configure)/campaignsSlice";

export default function CampaignsPage() {
  const selectedCampaigns = useAppSelector(
    (state) => state.campaigns.selectedCampaigns
  );
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Campaigns</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Create and manage your marketing campaigns
          </p>
        </div>
        <div className="flex w-full sm:w-auto">
          <CreateCampaignDialog />
        </div>
      </div>

      <div className="space-y-4">
        <CampaignFilters />
        <div className="overflow-x-auto rounded-lg border">
          <CampaignsList
            selectedCampaigns={selectedCampaigns}
            onSelectedCampaignsChange={(campaigns) =>
              dispatch(setSelectedCampaigns(campaigns))
            }
          />
        </div>
      </div>
    </div>
  );
}
