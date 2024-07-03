import Image from 'next/image'
import './style.css'
import Link from 'next/link'

const Menu = ({setShowMenu}) => {
  
  return (
    <div className='menuBox'>
      <div className='menuNavbar'>
        <Image src="/whiteLogo.png" height={35} width={35} alt=''/>
        <Image src="/cross.png" height={20} width={20} alt='' onClick={() => setShowMenu(prev => !prev)}/>
      </div>
      <div className='menuSection'>
        <Link href="/events">
        <h1>Dashboard</h1>
        </Link>
        <Link href="/favorites">
        <h1>Favorite Events</h1>
        </Link>
      </div>
    </div>
  )
}

export default Menu
