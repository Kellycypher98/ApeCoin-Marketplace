import React from "react";
import ItemCards from "./ItemCards";
import products from "../products";
import Pagination from "./pagination";
import { Typography } from "@material-tailwind/react";

import "./../index.css";

function Discount() {
  return (
    <div>
      <Typography variant="small" className="text-white">
        Get 5% off on all Items when you purchase with $Ape
      </Typography>
    </div>
  );
}
export default function Maincontent() {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const [currentPage, setCurrentPage] = React.useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = products.slice(startIndex, startIndex + itemsPerPage);

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-20 py-10 flex flex-col items-center space-y-10 bg-black">
      <Discount />
      <div className="grid grid-cols-3 gap-20">
        {visibleItems.map((product) => (
          <ItemCards
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={pageChange}
      />
    </div>
  );
}
