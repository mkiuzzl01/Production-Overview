import React from "react";
import useProducts from "../../lib/useProducts";

const Production_Overview = () => {
  const [metrics] = useProducts();

  console.log(metrics);
  return (
    <div>
      <div>
        <h1 className="text-center">All Progressing Overview of the product</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Production_Overview;
