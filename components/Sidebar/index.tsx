import { auth } from "@/auth";
import SidebarLinks from "./SidebarLink";
import { LogOut } from "lucide-react";

export const SideBar = async () => {
  const session = await auth();

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

      {/* Gunakan Client Component untuk links */}
      <SidebarLinks />

      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
        <form action="/auth/signout" method="POST">
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};
