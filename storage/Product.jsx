import React from "react";

const Product = () => {
  return (
    <div className="h-[250px] w-[200px] rounded-2xl bg-[#D9D9D9] px-2 py-2 shadow-[3px_3px_2px_rgba(0,0,0,0.4)]">
      <figure>
        <div className="h-[180px] w-[180px] rounded-2xl bg-white"></div>
      </figure>
      <div className="py-2 text-[#6F6F6F]">
        <p className="text-center">[TVM]機能排球衣</p>
        <div className="flex justify-center gap-x-1">
          <p>NT$</p>
          <p>750</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
