import Image from "next/image";
import "./style.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">
        <Link href="/">
        <Image src="/logo.png" height={49} width={49} alt="" className="img" style={{cursor:"pointer"}}/>
        </Link>
      </div>
      <div className="search">
        <Image src="/search.png" height={24} width={24} alt="" />
        <input placeholder="Search events..." />
      </div>
    </div>
  );
};

export default Navbar;
