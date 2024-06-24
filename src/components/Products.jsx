"use client";

import { useFetchData } from "@/services/queries";

const Products = () => {
  const { data: products, isLoading } = useFetchData("/products", "products");

  if (isLoading)
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  return (
    <div>
      {products.data.products.map((element, index) => (
        <p key={index}>{element.title}</p>
      ))}
    </div>
  );
};

export default Products;
