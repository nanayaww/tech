import { useState } from "react";
import ProductCard from "./card/ProductCard";
import Pagination from "./Pagination";
const ItemsList = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(11);
  const [currentProducts, setCurrentProducts] = useState();

  const lastPageIndex = currentPage * productsPerPage;
  const firstProductIndex = lastPageIndex - productsPerPage;
  const products = phones.slice(firstProductIndex, lastPageIndex);

  return (
    <div className=" flex flex-col w-full px-4 gap-5">
      <h1 className=" text-2xl font-bold">Used & Scrap phones</h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center gap-3 ">
        <Pagination
          totalProducts={phones.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ItemsList;
