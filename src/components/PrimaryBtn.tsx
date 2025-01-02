import React from "react";
import Image from "next/image";
const PrimaryBtn = ({ text, arrow }: { text: string; arrow: boolean }) => {
  return (
    <button
      className={`border-b border-b-black flex hover:gap-6 duration-500 ease-in-out items-center justify-center gap-2`}
    >
      {text}{" "}
      {arrow && (
        <Image
          src={"/images/banner_grid/arrow.svg"}
          alt="Arrow"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default PrimaryBtn;
