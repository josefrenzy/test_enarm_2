import React from "react";
import Image from "next/image";
import Logo from "../../public/img/logo.jpg";
import HeaderItem from "../../smallers/HeaderItem";
import Home from "../../public/icons/home.svg";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5  justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" icon={Home} />
      </div>

      <Image
        src={Logo}
        className="object-contain"
        width={100}
        height={100}
        alt="Logo"
      />
    </header>
  );
};

export default Header;
