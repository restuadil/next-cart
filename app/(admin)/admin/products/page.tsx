import { Button } from "@/components/Button";
import { ActionColumn } from "@/components/Table/ActionColumn";
import { TableHeader } from "@/components/Table/TableHeader";
import { getAllProducts } from "@/services/product.service";
import { ICategory } from "@/types/category";
import { IProduct } from "@/types/product";
import { IWebResponse } from "@/types/web";
import Image from "next/image";

export default async function AdminPage() {
  const { data: products, pagination }: IWebResponse<IProduct[]> =
    await getAllProducts();
  return (
    <div className="flex-1 p-8">
      {/* Header Section */}
      <TableHeader title="Product" to="products" />

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {products &&
              products.map(
                (
                  { _id, name, category, images, price, quantity }: IProduct,
                  idx: number
                ) => (
                  <tr
                    key={_id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                      {name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                      {category
                        .map((cat) =>
                          typeof cat === "string"
                            ? cat
                            : (cat as ICategory).name
                        )
                        .join(", ")}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                      {price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                      {quantity}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image
                        src={images[0]}
                        alt={name}
                        width={50}
                        height={50}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <ActionColumn _id={_id} resource="products" />
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3">
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">{products.length}</span> of{" "}
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
  );
}
