import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import ProductCard from "../ProductCard";
import styles from "./FeaturesSection.module.css";
import { client } from "@/sanity/lib/client";
const FeaturesSection = async () => {
  const query = `*[_type == "featureProducts"] | order(_createdAt, asc)`;
  const product = await client.fetch(query);

  return (
    <div className="container !py-[48px] flex flex-col gap-[48px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] font-medium leading-[44px]">
          New <br />
          Arrivals
        </h2>
        <div className="self-end">
          <PrimaryBtn text="More Products" arrow={true} />
        </div>
      </div>
      <div
        className={`${styles.features_product_container} py-[48px] flex gap-[24px] overflow-x-auto`}
      >
        {product.map((item: ProductCard) => (
          <>
            <ProductCard key={item.name} product={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
