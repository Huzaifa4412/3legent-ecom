import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({ product }: { product: ProductCard }) => {
  return (
    <div className="w-[262px] flex-shrink-0  h-[433px] relative flex flex-col justify-between">
      <div
        className="imagePart w-full h-[349px] overflow-hidden relative"
        style={{ backgroundColor: "var(--notification)" }}
      >
        <div className="saleTags absolute top-2 left-3 flex items-center justify-between gap-2">
          <div className="salesTag flex flex-col gap-2">
            <button className="bg-white w-max px-[14px] py-[4px] uppercase font-semibold text-[14px]">
              New
            </button>
            {product.isOnSale && (
              <button className="bg-[#38CB89] text-white w-max px-[14px] py-[4px] uppercase font-semibold text-[14px]">
                {product.discountPercent}%
              </button>
            )}
          </div>
        </div>
        <div className="whishList absolute top-8 right-3 cursor-pointer ">
          <Image
            src={"/images/products/wishList.svg"}
            className="p-2 rounded-full shadow-xl w-full h-full  "
            alt="Wish list"
            width={42}
            height={42}
          />
        </div>
        <Image
          src={urlFor(product.productImage).url()}
          alt={"name"}
          className="w-full h-full object-cover overflow-hidden"
          width={262}
          height={349}
        />
        <button className="bg-black hover:bg-white hover:text-black hover:border duration-500 ease-in-out hover:border-black px-[24px] w-[230px] absolute bottom-4 left-1/2 -translate-x-1/2 py-[8px] rounded-[8px] text-white">
          Add to Cart
        </button>
      </div>
      <div className="downPart flex flex-col gap-1">
        <div className="rating flex gap-1">
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
          <Image
            src={"/images/products/star.svg"}
            alt="Rating"
            width={16}
            height={16}
          />
        </div>

        <div className="title">{product.name
        }</div>
        <div className="price flex gap-2 font-bold">
          <div className="discountedPrice">Rs {product.discountedPrice}</div>
          <div className="actualPrice line-through text-[#6C7275] font-medium">
            Rs {product.actualPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
