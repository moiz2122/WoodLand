import React, { useState } from "react";
import ProductCard from "./ProductCard";
function ProductGrid() {
  const [count, setcount] = useState(0);
  return (
    <div className="col-span-10 lg:col-span-7 mb-14">
      {/* <button
        className="bg-white p-4 rounded-md"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment {count}
      </button> */}
      <ProductCard />
    </div>
  );
}

export default ProductGrid;
