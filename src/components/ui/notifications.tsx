"use client";

import { toast } from "@/hooks/use-toast";

export const notifications = {
  success: (message: string) => {
    toast({
      title: "Success",
      description: message,
      variant: "default",
    });
  },
  error: (message: string) => {
    toast({
      title: "Error",
      description: message,
      variant: "destructive",
    });
  },
  warning: (message: string) => {
    toast({
      title: "Warning",
      description: message,
      variant: "default",
      className: "bg-orange-100 border-orange-200",
    });
  },
  info: (message: string) => {
    toast({
      title: "Info",
      description: message,
      variant: "default",
      className: "bg-blue-100 border-blue-200",
    });
  },
};
