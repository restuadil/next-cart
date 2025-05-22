import { Button } from "@/components/Button";
import { SideBar } from "@/components/Sidebar";
import { getAllCategories } from "@/services/category.service";
import { ICategory } from "@/types/category";
import { Plus, Search } from "lucide-react";

export default async function AdminPage() {
  const { data: categories, pagination } = await getAllCategories();
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Category Management
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Categories..."
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              />
            </div>
            <Button variant="primary" size="md" leftIcon={<Plus />}>
              Add Category
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Category Name
                </th>

                <th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {categories.map(({ name }: ICategory, idx: number) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="danger" size="sm">
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-white px-6 py-3 flex items-center justify-between border-t border-slate-200">
            <div className="text-sm text-slate-500">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{categories.length}</span> of{" "}
              <span className="font-medium">{pagination.totalData}</span>{" "}
              results
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
