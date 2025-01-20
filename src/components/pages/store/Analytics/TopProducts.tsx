"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface TopProductsProps {
  data: {
    id: string;
    name: string;
    revenue: number;
    growth: number;
    imageUrl?: string;
  }[];
}

export function TopProducts({ data }: TopProductsProps) {
  const maxRevenue = Math.max(...data.map((product) => product.revenue));

  return (
    <div className="space-y-8">
      {data.map((product) => (
        <div key={product.id} className="space-y-3">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={product.imageUrl} alt={product.name} />
              <AvatarFallback>
                {product.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{product.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="flex-1">
                  ${product.revenue.toLocaleString()}
                </span>
                <span
                  className={
                    product.growth >= 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {product.growth >= 0 ? "+" : ""}
                  {product.growth}%
                </span>
              </div>
            </div>
          </div>
          <Progress
            value={(product.revenue / maxRevenue) * 100}
            className="h-2"
          />
        </div>
      ))}
    </div>
  );
}
