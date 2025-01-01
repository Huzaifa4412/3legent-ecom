import React from "react";
import PrimaryBtn from "../PrimaryBtn";
// import ArticleCard from "./ArticleCard";
// import client from "@/sanity/client";

export const revalidate = 10; //seconds

const Article = async () => {
  return (
    <div className="container !py-[80px] flex flex-col gap-[40px]">
      <div className="heading flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Articles</h2>
        <PrimaryBtn text="More Articles" arrow={true} />
      </div>
      <div className="articleContainer w-full flex flex-wrap items-center justify-center gap-[25px]">
        {/* <ArticleCard
          key={"article.slug"}
          title={"article.title"}
          image={"article.image"}
          slug={"article.slug"}
        /> */}
      </div>
    </div>
  );
};

export default Article;
