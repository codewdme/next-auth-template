import React from "react";
import { TotalTraffic } from "./TotalTraffic";
import Stats from "./Stats";
import OrdersOverview from "./OrdersOverview";

function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <TotalTraffic />
      <Stats />
      <OrdersOverview />
    </div>
  );
}

export default DashboardPage;
