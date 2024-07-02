"use client";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname} from "next/navigation";

const LeftNavbar = () => {
  const [isFavoritePage,setIsFavoritePage] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    setIsFavoritePage(pathname === "/favorites");
  }, [pathname]);
  return (
    <div className="leftContainer">
      <div className="leftLogos">
        <Link href="/events">
          <Image
            src="/grid.png"
            alt=""
            height={48}
            width={48}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Link href="/favorites">
          <Image
            src={isFavoritePage ? "/redheart.png" : "/calendar.png"}
            alt=""
            height={48}
            width={48}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftNavbar;
