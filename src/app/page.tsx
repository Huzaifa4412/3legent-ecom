import Home from "@/components/Home-Page/Home";
import React from "react";

export const revalidate = 10; // seconds

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
