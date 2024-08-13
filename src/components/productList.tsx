"use client";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import ProductFilter from "./productFilter";
import ProductGrid from "./productGrid";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const dynamicProducts = "https://fakestoreapi.com/products";
  const categoriesEndpoint = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(dynamicProducts);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(categoriesEndpoint);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductList;
