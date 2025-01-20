"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MetaobjectsList } from "./MetaobjectsList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateMetaobjectDialog } from "./CreateMetaobjectDialog";

export default function MetaobjectsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Metaobjects</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage custom content types and data models
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import</Button>
          <Button variant="outline">Export</Button>
          <CreateMetaobjectDialog />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          placeholder="Search metaobjects..."
          className="sm:max-w-[300px]"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="faq">FAQ</SelectItem>
            <SelectItem value="testimonial">Testimonial</SelectItem>
            <SelectItem value="banner">Banner</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <MetaobjectsList />
    </div>
  );
}
