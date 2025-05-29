import { notFound } from "next/navigation";

export default async function ProductRoutePage({
  params,
}: {
  params: Promise<{ type: [string, string] }>;
}) {
  const { type } = await params;
  const [action, id] = type;

  if (action === "edit") {
    if (!id) notFound();
    return (
      <div className="mt-4">
        <p>Edit Product</p>
      </div>
    );
  }

  if (action === "add") {
    return (
      <div className="mt-4">
        <p>Add Product</p>
      </div>
    );
  }

  notFound();
}
