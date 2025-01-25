"use client";

import * as React from "react";
import {
  UserRound,
  Box,
  Command,
  // Frame,
  LifeBuoy,
  // Map,
  // PieChart,
  Send,
  LayoutDashboard,
  ShoppingBag,
  CirclePercent,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/store/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Orders",
      url: "/store/orders",
      icon: ShoppingBag,
      items: [
        {
          title: "Drafts",
          url: "/store/orders/drafts",
        },
        {
          title: "Abandoned Checkouts",
          url: "/store/orders/abandoned-checkouts",
        },
      ],
    },
    {
      title: "Products",
      url: "/store/products",
      icon: Box,
      items: [
        {
          title: "Collections",
          url: "/store/products/collections",
        },
        {
          title: "Inventory",
          url: "/store/products/inventory",
        },
        // {
        //   title: "Purchase Orders",
        //   url: "/store/products/purchase-orders",
        // },
        // {
        //   title: "Transfers",
        //   url: "/store/products/transfers",
        // },
        {
          title: "Gift cards",
          url: "/store/products/gift-cards",
        },
      ],
    },
    {
      title: "Customers",
      url: "/store/customers",
      icon: UserRound,
      items: [
        {
          title: "Segments",
          url: "/store/customers/segments",
        },
      ],
    },
    // {
    //   title: "Content",
    //   url: "/store/content",
    //   icon: BookImage,
    //   items: [
    //     {
    //       title: "Metaobjects",
    //       url: "/store/content/meta-objects",
    //     },
    //     {
    //       title: "Files",
    //       url: "/store/content/files",
    //     },
    //     {
    //       title: "Menus",
    //       url: "/store/content/menus",
    //     },
    //   ],
    // },
    // {
    //   title: "Analytics",
    //   url: "/store/analytics",
    //   icon: ChartNoAxesColumn,
    //   items: [
    //     {
    //       title: "Reports",
    //       url: "/store/analytics/reports",
    //     },
    //     {
    //       title: "Live View",
    //       url: "/store/analytics/live-view",
    //     },
    //   ],
    // },
    // {
    //   title: "Marketing",
    //   url: "/store/marketing",
    //   icon: Target,
    //   items: [
    //     {
    //       title: "Campaigns",
    //       url: "/store/marketing/Campaigns",
    //     },
    //     {
    //       title: "Automations",
    //       url: "/store/marketing/automations",
    //     },
    //   ],
    // },
    {
      title: "Discounts",
      url: "/store/discounts",
      icon: CirclePercent,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({
  pathname,
  ...props
}: { pathname: string } & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  {/* give store name here! */}
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} pathname={pathname} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* add this later on */}
        <NavSecondary
          items={data.navSecondary}
          pathname={pathname}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
