import React from "react";
import Image from "next/image";
const HeaderItem = (props) => {
  const { title, icon } = props;
  return (
    <div
      className="flex flex-col items-center cursor-pointer group
        w-12 sm:w-20 hover:text-white"
    >
      <Image src={icon} className=" mb-1 group-hover:animate-bounce" />
      <h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </h1>

    </div>
  );
};

export default HeaderItem;
