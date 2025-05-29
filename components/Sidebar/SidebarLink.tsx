"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Shapes,
  ShoppingBag,
  Users,
  AppleIcon,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: ShoppingBag,
  },
  {
    label: "Brands",
    href: "/admin/brands",
    icon: AppleIcon,
  },
  {
    label: "Categories",
    href: "/admin/categories",
    icon: Shapes,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingBag,
  },

  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function SidebarLinks() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1 p-4">
      {SIDEBAR_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center rounded-lg px-4 py-3 text-sm font-medium",
            "text-slate-600 hover:bg-slate-100",
            pathname.includes(item.href)
              ? "bg-slate-100 text-green-500"
              : "text-slate-600"
          )}
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
