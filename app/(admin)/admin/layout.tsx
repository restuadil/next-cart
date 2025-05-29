import { SideBar } from "@/components/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <SideBar />
      <div className="ml-64 flex-1">{children}</div>
    </div>
  );
}
