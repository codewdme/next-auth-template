"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  ChevronRight,
  BookOpen,
  Code,
  Rocket,
  Wrench,
} from "lucide-react";

export function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: Rocket,
      description: "Learn the basics of setting up and managing your store",
      guides: [
        {
          title: "Quick Start Guide",
          description: "Set up your store in under 15 minutes",
          timeToRead: "5 min read",
        },
        {
          title: "Store Configuration",
          description: "Essential settings for your store",
          timeToRead: "10 min read",
        },
        {
          title: "Adding Products",
          description: "Learn how to add and manage products",
          timeToRead: "8 min read",
        },
      ],
    },
    {
      title: "Developer Guide",
      icon: Code,
      description: "Technical documentation and API references",
      guides: [
        {
          title: "API Documentation",
          description: "Complete API reference and examples",
          timeToRead: "20 min read",
        },
        {
          title: "Webhooks",
          description: "Setting up and managing webhooks",
          timeToRead: "12 min read",
        },
        {
          title: "Custom Integration",
          description: "Build custom integrations with our API",
          timeToRead: "15 min read",
        },
      ],
    },
    {
      title: "Advanced Features",
      icon: Wrench,
      description: "Detailed guides for advanced store features",
      guides: [
        {
          title: "Automation Rules",
          description: "Create automated workflows",
          timeToRead: "10 min read",
        },
        {
          title: "Custom Fields",
          description: "Add custom data to orders and products",
          timeToRead: "8 min read",
        },
        {
          title: "Advanced Analytics",
          description: "Deep dive into store analytics",
          timeToRead: "15 min read",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search documentation..." className="pl-9" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5" />
                <CardTitle>{section.title}</CardTitle>
              </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ScrollArea className="h-[250px] pr-4">
                <div className="space-y-4">
                  {section.guides.map((guide) => (
                    <div
                      key={guide.title}
                      className="group rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium group-hover:text-primary">
                          {guide.title}
                        </h3>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {guide.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {guide.timeToRead}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <CardTitle>Latest Updates</CardTitle>
          </div>
          <CardDescription>
            Recent changes and additions to our documentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex justify-between items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
              >
                <div>
                  <h4 className="font-medium">Documentation Update {i}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Added new section on advanced features and API endpoints
                  </p>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {i} day{i !== 1 ? "s" : ""} ago
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
