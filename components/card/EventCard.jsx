import Image from "next/image";
import "./style.css";

const EventCard = ({event}) => {
  console.log("eventCard", event);
  return (
    <>
      <div className="eventCard">
        <div className="top">
          <div className="topDesc">
            <h1>{event.formattedTitle}</h1>
            <div className="topDate">{event.formattedDate}, {event.time}</div>
          </div>
          <div className="category">
            <span>Category: <span style={{textTransform:"uppercase"}}>{event.category}</span></span>
          </div>
        </div>

        <div className="mid">
          <h1>Description</h1>
          <p>
          {event.description}
          </p>
        </div>

        <div className="end">
          <Image src="/map.png" height={32} width={32} alt="" />
          <span>{event.geo.address.locality}</span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
