"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RecentActivityList } from "./RecentActivityList";

export default function ContentPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Content</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {` Manage your store's content, files, and navigation`}
          </p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Add New Content</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/store/content/metaobjects/new">
                  New Metaobject
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/store/content/files">Upload Files</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/store/content/menus/new">New Menu</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mb-6">
        <Input placeholder="Search content..." className="max-w-md" />
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Metaobjects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Active metaobjects</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/store/content/metaobjects">View All</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Files</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">128</p>
            <p className="text-sm text-muted-foreground">
              Uploaded files (2.4 GB used)
            </p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/store/content/files">Manage Files</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Menus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Active menus</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/store/content/menus">Manage Menus</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <RecentActivityList />
      </div>
    </div>
  );
}
