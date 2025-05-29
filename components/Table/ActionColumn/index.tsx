"use client";

import { Button } from "@/components/Button";
import { deleteCategory } from "@/services/category.service";
import Link from "next/link";
import { useState } from "react";

export const ActionColumn = ({
  _id,
  resource,
}: {
  _id: string;
  resource:
    | "products"
    | "categories"
    | "users"
    | "orders"
    | "coupons"
    | "brands";
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onClick = async () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = async () => {
    if (resource === "categories") {
      await deleteCategory(_id);
      window.location.reload();
    }
  };
  return (
    <>
      <div className="flex justify-center space-x-2">
        <Button variant="outline" size="sm">
          <Link href={`/admin/${resource}/edit/${_id}`}> Edit</Link>
        </Button>
        <Button variant="danger" size="sm" onClick={onClick}>
          Delete
        </Button>
      </div>

      {
        // modal for confirmation can be added here
        <div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="rounded bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-left text-lg font-semibold">
                  Confirm Delete
                </h2>
                <p>Are you sure you want to delete this {resource}?</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <Button variant="outline" onClick={onClick}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};
