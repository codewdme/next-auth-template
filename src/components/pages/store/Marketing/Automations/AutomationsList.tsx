"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { EditAutomationDialog } from "./EditAutomationDialog";
import { DeleteAutomationDialog } from "./DeleteAutomationDialog";
import { useAppSelector } from "@/lib/redux/hooks";
import { Card } from "@/components/ui/card";

interface AutomationsListProps {
  selectedAutomations: string[];
  onSelectedAutomationsChange: (automations: string[]) => void;
}

export function AutomationsList({
  selectedAutomations,
  onSelectedAutomationsChange,
}: AutomationsListProps) {
  const automations = useAppSelector((state) => state.automations.automations);

  // Mobile view card component
  const AutomationCard = ({ automation }: { automation: any }) => (
    <Card className="p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="font-medium">{automation.name}</div>
          <div className="text-sm text-muted-foreground">
            Type: {automation.triggerType.replace("_", " ")}
          </div>
        </div>
        <Badge
          variant={automation.status === "active" ? "default" : "secondary"}
        >
          {automation.status}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground">Triggered</div>
          <div>{automation.triggered.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Completed</div>
          <div>{automation.completed.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Conversion Rate</div>
          <div>
            {((automation.completed / automation.triggered) * 100).toFixed(1)}%
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <EditAutomationDialog automation={automation} />
        <DeleteAutomationDialog automation={automation} />
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
                  checked={selectedAutomations.length === automations.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onSelectedAutomationsChange(automations.map((a) => a.id));
                    } else {
                      onSelectedAutomationsChange([]);
                    }
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Trigger Type</TableHead>
              <TableHead>Triggered</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Conversion Rate</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {automations.map((automation) => (
              <TableRow key={automation.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedAutomations.includes(automation.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onSelectedAutomationsChange([
                          ...selectedAutomations,
                          automation.id,
                        ]);
                      } else {
                        onSelectedAutomationsChange(
                          selectedAutomations.filter(
                            (id) => id !== automation.id
                          )
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{automation.name}</TableCell>
                <TableCell className="capitalize">
                  {automation.triggerType.replace("_", " ")}
                </TableCell>
                <TableCell>{automation.triggered.toLocaleString()}</TableCell>
                <TableCell>{automation.completed.toLocaleString()}</TableCell>
                <TableCell>
                  {(
                    (automation.completed / automation.triggered) *
                    100
                  ).toFixed(1)}
                  %
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      automation.status === "active" ? "default" : "secondary"
                    }
                  >
                    {automation.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <EditAutomationDialog automation={automation} />
                  <DeleteAutomationDialog automation={automation} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {automations.map((automation) => (
          <AutomationCard key={automation.id} automation={automation} />
        ))}
      </div>
    </>
  );
}
