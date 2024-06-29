"use client";
import Image from "next/image";
import "./style.css";;

const UpcomingEvents = ({ events, favorites, setFavorites }) => {

  const handleFavoriteClick = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };
  return (
    <div className="eventContainer">
      <h1>Upcoming Events</h1>
      {events.map((event, index) => (
        <div key={index} className="eventCard">
          <div className="cardInfo">
            <div className="eventName">
              <span>{event.formattedTitle}</span>
            </div>
            <div className="eventDate">
              <span>{event.formattedDate + ", " }</span>
              <span>{event.time}</span>
            </div>
          </div>
          <Image
            src={favorites[index] ? "/redheart.png" : "/vector.png"}
            alt=""
            width={20}
            height={18}
            className="heart"
            onClick={() => handleFavoriteClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
