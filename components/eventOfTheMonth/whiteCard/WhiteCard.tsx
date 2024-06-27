import Image from "next/image"
import "./style.css"
const WhiteCard = () => {
  return (
    <div>
      <div className="detailCard">
        <div className="left">
          <h1>Web Development</h1>
          <div>
            <span>Category: AI</span>
          </div>

          <div className="map">
            <Image src="/map.png" alt="" height={12} width={15} />
            <span>Bahria Intellectual Village</span>
          </div>
        </div>

        <div className="right">

          <div className="img">
            <Image src="/group.png" alt="" height={20} width={110}/>
          </div>

          <div className="date">
            Thu 2 Nov 2023
          </div>

          <div className="time">
            12:00am
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhiteCard
