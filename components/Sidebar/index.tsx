import { cn } from "@/utils/cn";
import { Button } from "../Button";
import {
  LayoutDashboard,
  LogOut,
  Settings,
  Shapes,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";

export const SideBar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="fixed left-0 top-0 h-full w-64 border-r border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-4">
        <h2 className="text-center text-xl font-bold text-green-600">
          Admin Dashboard
        </h2>
        <p className="text-center text-sm text-slate-600">
          {session?.user?.username}
        </p>
      </div>

      <nav className="space-y-1 p-4">
        <Link
          href="/admin/dashboard"
          className={cn(
            "flex items-center rounded-lg px-4 py-3 text-sm font-medium",
            "bg-green-50 text-green-600"
          )}
        >
          <LayoutDashboard className="mr-3" />
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className={cn(
            "flex items-center rounded-lg px-4 py-3 text-sm font-medium",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <ShoppingBag className="mr-3" />
          Products
        </Link>
        <Link
          href="/admin/categories"
          className={cn(
            "flex items-center rounded-lg px-4 py-3 text-sm font-medium",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <Shapes className="mr-3" />
          Categories
        </Link>
        <Link
          href="/admin/users"
          className={cn(
            "flex items-center rounded-lg px-4 py-3 text-sm font-medium",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <Users className="mr-3" />
          Users
        </Link>
        <Link
          href="/admin/settings"
          className={cn(
            "flex items-center rounded-lg px-4 py-3 text-sm font-medium",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <Settings className="mr-3" />
          Settings
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
        <Button variant="ghost" className="w-full" leftIcon={<LogOut />}>
          Logout
        </Button>
      </div>
    </div>
  );
};
