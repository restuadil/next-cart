import AddCategoryPage from "@/components/Views/Category/AddCategoryPage";
import EditCategoryPage from "@/components/Views/Category/EditCategoryPage";
import { notFound } from "next/navigation";

export default async function CategoryRoutePage({
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
        <EditCategoryPage id={id} />
      </div>
    );
  }

  if (action === "add") {
    return (
      <div className="mt-4">
        <AddCategoryPage />
      </div>
    );
  }

  notFound();
}
