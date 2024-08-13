import React from "react";
import Image from "next/image";
import { HeartIcon } from "@/assets/icons/heartIcon";
import { StarIcon } from "@/assets/icons/starIcon";
import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Image
        src={product.image}
        width="200"
        height="200"
        alt={product.title}
        className="h-48 w-full object-contain"
      />
      <div className="p-4">
        <p className="font-medium text-sm">
          Category:{" "}
          <span className="text-blue-500 capitalize">{product.category}</span>
        </p>
        <div className="flex gap-2 items-center mt-4 mb-3">
          <StarIcon />
          <p className="text-sm font-medium text-gray-400">
            {product.rating.rate}
          </p>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 mt-2 truncate cursor-pointer">
          {product.title}
        </h2>
        <p className="text-gray-700 font-medium mb-2">${product.price}</p>

        <p className="text-gray-500 text-sm h-16 overflow-hidden">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
