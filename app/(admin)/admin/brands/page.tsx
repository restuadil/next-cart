import { Button } from "@/components/Button";
import { ActionColumn } from "@/components/Table/ActionColumn";
import { TableHeader } from "@/components/Table/TableHeader";
import { getAllBrands } from "@/services/brand.service";
import { IBrand } from "@/types/brand";
import Image from "next/image";

export default async function AdminPage() {
  const { data: brands, pagination } = await getAllBrands();
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header Section */}
        <TableHeader title="Brand" to="brands" />

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Brand Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Brand Logo
                </th>

                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {brands &&
                brands.map(({ name, logo, _id }: IBrand, idx: number) => (
                  <tr
                    key={_id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                      {name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                      <Image
                        src={logo}
                        alt={name}
                        width={50}
                        height={50}
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <ActionColumn _id={_id} resource="brands" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Pagination */}
        </div>

        {/* Pagination Section */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3">
          <div className="text-sm text-slate-500">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">{brands.length}</span> of{" "}
            <span className="font-medium">{pagination.totalData}</span> results
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
    </>
  );
}
