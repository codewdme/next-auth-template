"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCenter } from "./HelpCenter";
import { ContactSupport } from "./ContactSupport";

export default function SupportPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Help & Support</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Get help with your store and find answers to common questions
        </p>
      </div>

      <Tabs defaultValue="help-center" className="space-y-4">
        <div className="w-full overflow-auto">
          <TabsList className="inline-flex h-auto p-1 w-full sm:w-auto">
            <TabsTrigger
              value="help-center"
              className="py-2 px-3 whitespace-nowrap"
            >
              Help Center
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="py-2 px-3 whitespace-nowrap"
            >
              Contact Support
            </TabsTrigger>
            <TabsTrigger
              value="documentation"
              className="py-2 px-3 whitespace-nowrap"
            >
              Documentation
            </TabsTrigger>
            <TabsTrigger value="faqs" className="py-2 px-3 whitespace-nowrap">
              FAQs
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="help-center" className="space-y-4">
          <HelpCenter />
        </TabsContent>
        <TabsContent value="contact" className="space-y-4">
          <ContactSupport />
        </TabsContent>
        <TabsContent value="documentation" className="space-y-4">
          <Documentation />
        </TabsContent>
        <TabsContent value="faqs" className="space-y-4">
          <FAQs />
        </TabsContent>
      </Tabs>
    </div>
  );
}
