import { Button } from "@/components/Button";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export const TableHeader = ({ title, to }: { title: string; to: string }) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-slate-800">{title} Management</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            className="rounded-lg border border-slate-300 py-2 pl-10 pr-4 transition-all focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <Link href={`/admin/${to}/add`}>
          <Button variant="primary" size="md" leftIcon={<Plus />}>
            Add Brand
          </Button>
        </Link>
      </div>
    </div>
  );
};
