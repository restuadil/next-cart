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
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 shadow-sm">
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-green-600 text-center">
          Admin Dashboard
        </h2>
        <p className="text-sm text-slate-600 text-center">
          {session?.user?.username}
        </p>
      </div>

      <nav className="p-4 space-y-1">
        <Link
          href="/admin/dashboard"
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
            "text-green-600 bg-green-50"
          )}
        >
          <LayoutDashboard className="mr-3" />
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <ShoppingBag className="mr-3" />
          Products
        </Link>
        <Link
          href="/admin/categories"
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <Shapes className="mr-3" />
          Categories
        </Link>
        <Link
          href="/admin/users"
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <Users className="mr-3" />
          Users
        </Link>
        <Link
          href="/admin/settings"
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
            "text-slate-600 hover:bg-slate-100"
          )}
        >
          <Settings className="mr-3" />
          Settings
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
        <Button variant="ghost" className="w-full" leftIcon={<LogOut />}>
          Logout
        </Button>
      </div>
    </div>
  );
};
