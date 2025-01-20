"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

export function FAQs() {
  const categories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "How do I get started with my store?",
          answer:
            "To get started, complete the initial store setup process by adding your business information, configuring payment methods, and adding your first products. Our quick start guide provides step-by-step instructions.",
        },
        {
          question: "What payment methods are supported?",
          answer:
            "We support major credit cards, PayPal, and various digital wallets. You can configure your preferred payment methods in the store settings.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can reach our support team through live chat, email, or phone. Premium users get priority support with faster response times.",
        },
      ],
    },
    {
      title: "Orders & Shipping",
      questions: [
        {
          question: "How do I process orders?",
          answer:
            "Orders can be processed through the Orders dashboard. You can view order details, update status, and manage fulfillment from one central location.",
        },
        {
          question: "Can I offer free shipping?",
          answer:
            "Yes, you can set up free shipping rules based on order value, customer location, or specific products. Configure shipping settings in the store dashboard.",
        },
        {
          question: "How do I handle returns?",
          answer:
            "You can process returns through the Orders section. Create a return label, update the order status, and process refunds as needed.",
        },
      ],
    },
    {
      title: "Products & Inventory",
      questions: [
        {
          question: "How do I add products?",
          answer:
            "You can add products through the Products section. Fill in the product details, add images, set pricing, and manage inventory levels.",
        },
        {
          question: "Can I import products in bulk?",
          answer:
            "Yes, you can import products using our bulk import tool. Prepare your product data in CSV format and upload it through the Products section.",
        },
        {
          question: "How do I manage inventory?",
          answer:
            "Inventory can be managed through the Products section. Set stock levels, enable low stock alerts, and track inventory movements.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search frequently asked questions..."
          className="pl-9"
        />
      </div>

      <div className="grid gap-6">
        {categories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>
                Common questions about {category.title.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
