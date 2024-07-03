"use client";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { useState } from "react";
import Menu from "../menu/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuComp = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navContainer">
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.png"
            height={49}
            width={49}
            alt=""
            className="img"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="search">
        <Image src="/search.png" height={24} width={24} alt="" />
        <input placeholder="Search events..." />
      </div>
      <Image
        src="/list-minus.png"
        height={30}
        width={30}
        alt=""
        className="responsive-image"
        onClick={handleMenuComp}
      />
      {showMenu && (
        <div className="menuContainer">
          <Menu showMenu={showMenu} setShowMenu={()=> setShowMenu(prev => !prev)}/>
        </div>
      )}
    </div>
  );
};

export default Navbar;
