"use client";
import Image from "next/image";
import "./style.css";
import { useState } from "react";
const cardData = [
  {
    event: "Web Development",
    time: "Thu 2 Nov, 12:00AM",
    imgUrl: "/vector.png",
  },
  {
    event: "Web Development",
    time: "Thu 2 Nov, 12:00AM",
    imgUrl: "/vector.png",
  },
  {
    event: "Web Development",
    time: "Thu 2 Nov, 12:00AM",
    imgUrl: "/vector.png",
  },
  {
    event: "Web Development",
    time: "Thu 2 Nov, 12:00AM",
    imgUrl: "/vector.png",
  },
  {
    event: "Web Development",
    time: "Thu 2 Nov, 12:00AM",
    imgUrl: "/vector.png",
  },
  {
    event: "Web Development",
    time: "Thu 2 Nov, 12:00AM",
    imgUrl: "/vector.png",
  },
];
const UpcomingEvents = () => {
  const [favorites, setFavorites] = useState(
    Array(cardData.length).fill(false)
  );

  const handleFavoriteClick = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };
  return (
    <div className="eventContainer">
      <h1>Upcoming Events</h1>
      {cardData.map((card, index) => (
        <div key={index} className="eventCard">
          <div className="cardInfo">
            <div className="eventName">
              <span>{card.event}</span>
            </div>
            <div className="eventDate">
              <span>{card.time}</span>
            </div>
          </div>
          <Image
            src={favorites[index] ? "/redheart.png" : card.imgUrl}
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
