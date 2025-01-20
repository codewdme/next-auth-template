"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import React from "react";

const breadcrumbMap: Record<string, { label: string; parent?: string }> = {
  "/store": { label: "Store Dashboard" },
  "/store/analytics": { label: "Analytics", parent: "Store Dashboard" },
  "/store/analytics/reports": { label: "Reports", parent: "Analytics" },
  "/store/analytics/live": { label: "Live View", parent: "Analytics" },
  "/store/content": { label: "Content", parent: "Store Dashboard" },
  "/store/content/files": { label: "Files", parent: "Content" },
  "/store/content/metaobjects": { label: "Metaobjects", parent: "Content" },
  "/store/content/menus": { label: "Menus", parent: "Content" },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
  session?: Session;
}) {
  const pathname = usePathname();
  const currentPath = breadcrumbMap[pathname];

  const getBreadcrumbItems = () => {
    if (!currentPath) return [];

    const items = [{ label: currentPath.label, path: pathname }];
    let parent = currentPath.parent;

    while (parent) {
      const parentPath = Object.entries(breadcrumbMap).find(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) => value.label === parent
      );
      if (parentPath) {
        items.unshift({ label: parent, path: parentPath[0] });
        parent = breadcrumbMap[parentPath[0]].parent;
      } else {
        break;
      }
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={item.path}>
                    <BreadcrumbItem>
                      {index === breadcrumbItems.length - 1 ? (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={item.path}>
                          {item.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-lg bg-muted/50 md:min-h-min overflow-hidden">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
