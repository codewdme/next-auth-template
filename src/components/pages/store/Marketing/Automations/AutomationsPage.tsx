"use client";

import { Button } from "@/components/ui/button";
import { AutomationsList } from "./AutomationsList";
import { CreateAutomationDialog } from "./CreateAutomationDialog";
import { AutomationFilters } from "./AutomationFilters";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { setSelectedAutomations } from "@/lib/redux/slices/automationsSlice";

export default function AutomationsPage() {
  const selectedAutomations = useAppSelector(
    (state) => state.automations.selectedAutomations
  );
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Automations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Set up automated marketing workflows
          </p>
        </div>
        <div className="flex w-full sm:w-auto">
          <CreateAutomationDialog />
        </div>
      </div>

      <div className="space-y-4">
        <AutomationFilters />
        <div className="overflow-x-auto rounded-lg border">
          <AutomationsList
            selectedAutomations={selectedAutomations}
            onSelectedAutomationsChange={(automations) =>
              dispatch(setSelectedAutomations(automations))
            }
          />
        </div>
      </div>
    </div>
  );
}
