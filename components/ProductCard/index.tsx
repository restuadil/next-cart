"use client";
import Image, { StaticImageData } from "next/image";
import { ShoppingBag, Star } from "lucide-react";

interface ProductCardProps {
  imgSrc: StaticImageData;
  id: number;
  name: string;
  price: string;
  description: string;
  rating: number;
}
const ProductCard = ({ product }: { product: ProductCardProps }) => {
  const displayRating = product.rating.toFixed(1);
  return (
    <div className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-green-300 bg-white shadow-md">
      <div className="h-[250px] w-full bg-slate-50">
        <Image
          priority
          src={product.imgSrc}
          alt={product.name}
          height={250}
          width={300}
          className="object-contain p-5 transition-transform duration-200 group-hover:p-4"
          style={{
            height: "auto",
            width: "auto",
          }}
        />
      </div>

      <div className="flex flex-auto flex-col justify-between px-4 py-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium uppercase text-gray-400">
            Gadget Accessories, Airbuds
          </span>
          <h1 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {product.name}
          </h1>

          <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
            {[...Array(5)].map((_, i) => {
              const isFull = product.rating >= i + 1;
              const isHalf =
                product.rating >= i + 0.5 && product.rating < i + 1;

              if (isHalf) {
                return (
                  <div key={i} className="relative h-4 w-4">
                    {/* background star (gray) */}
                    <Star className="absolute h-4 w-4 text-gray-300" />
                    {/* half-filled star (green) */}
                    <Star
                      className="absolute h-4 w-4 overflow-hidden text-green-500"
                      style={{
                        clipPath: "inset(0 50% 0 0)", // shows only left half
                      }}
                      fill="#22c55e"
                    />
                  </div>
                );
              }

              return (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    isFull ? "text-green-500" : "text-gray-300"
                  }`}
                  fill={isFull ? "#22c55e" : "none"}
                />
              );
            })}
            <span className="ml-2 text-sm font-medium text-gray-700">
              {displayRating} / 5
            </span>
          </div>

          <span className="text-sm text-green-600">
            In Stock <span className="font-semibold text-gray-800">9</span>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {product.price}
          </span>
          <button className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-green-600">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
