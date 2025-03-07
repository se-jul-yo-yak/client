"use client";

import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  title: string;
  children: React.ReactNode;
}

export default function Sidebar({ title, children }: SidebarProps) {
  return (
    <div className="w-64 h-screen p-6 bg-gray-100 border-r flex flex-col space-y-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {children}
      <Separator />
    </div>
  );
}
