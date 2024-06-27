import Image from "next/image"
import "./style.css"
import Link from "next/link"

const LeftNavbar = () => {
  return (
    <div className="leftContainer">
      <div className="leftLogos">
        <Link href="/events">
      <Image src="/grid.png" alt="" height={48} width={48} style={{cursor:"pointer"}}/>
        </Link>
      <Image src="/calendar.png" alt="" height={48} width={48}/>
      </div>
    </div>
  )
}

export default LeftNavbar
 