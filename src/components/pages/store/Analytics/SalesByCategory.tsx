"use client";

import { CategoryData } from "@/types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface SalesByCategoryProps {
  data: CategoryData[];
}

export function SalesByCategory({ data }: SalesByCategoryProps) {
  return (
    <div className="space-y-4">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="max-h-[200px] overflow-auto">
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1 text-sm">{item.name}</div>
              <div className="text-sm font-medium">
                ${item.value.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
