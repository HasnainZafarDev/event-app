import Image from "next/image"
import "./style.css"
const WhiteCard = ({highestRank}) => {
  console.log(highestRank)
  return (
    <div>
      <div className="detailCard">
        <div className="left">
          <h1>{highestRank?.formattedTitle}</h1>
          <div>
            <span>Category:<span style={{textTransform:"uppercase"}}>{highestRank?.category}</span></span>
          </div>

          <div className="map">
            <Image src="/map.png" alt="" height={12} width={15} />
            <span>{highestRank?.geo?.address?.locality}</span>
          </div>
        </div>

        <div className="right">

          <div className="img">
            <Image src="/group.png" alt="" height={20} width={110}/>
          </div>

          <div className="date">
           {highestRank?.formattedDate}
          </div>

          <div className="time">
           {highestRank?.time}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhiteCard
