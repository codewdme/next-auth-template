import AdminLayout from "@/components/layout/AdminLayout";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage your Store",
};

type LayoutProps = {
  children: ReactNode;
};
const Layout = async ({ children }: LayoutProps) => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return <AdminLayout session={session}>{children}</AdminLayout>;
};

export { metadata };
export default Layout;
