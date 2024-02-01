import React from "react";
import Product from "./Product";

const ShopPage = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      <header className="flex h-[260px] w-full justify-between bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 pt-5">
        <h2 className="align-bottom font-['Ubuntu'] text-[140px] font-bold leading-[300px] text-white [text-shadow:4px_4px_#FCA311]">
          Shop
        </h2>
      </header>
      <section className="flex justify-between bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] p-10 px-40 text-[#6F6F6F]">
        {/* 左半部導航 */}
        <div className="flex w-1/5 flex-col gap-y-10 rounded-2xl bg-white px-6 py-4 text-2xl ">
          <p>排球</p>
          <p>排球衣</p>
          <p>排球褲</p>
          <p>排球襪</p>
          <p>排球鞋</p>
          <p>護具</p>
          <p>週邊小物</p>
        </div>
        {/* 右半部商品區 */}
        <div className="w-[77%] space-y-6">
          <h3 className="rounded-full bg-white py-3 text-center text-2xl">
            排球衣
          </h3>
          <div className=" grid grid-cols-4 gap-y-5 rounded-2xl bg-white p-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
