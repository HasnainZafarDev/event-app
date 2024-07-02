"use client";
import Image from "next/image";
import "./style.css";
import { useEffect, useState } from "react";

const UpcomingEvents = ({ filteredEvents,handleFavoriteClick,isFavorite }) => {
 
  return (
    <div className="eventContainer">
      <h1>Upcoming Events</h1>
      {filteredEvents.map((filteredEvent, index) => (
        <div key={index} className="eventCard">
          <div className="cardInfo">
            <div className="eventName">
              <span>{filteredEvent.formattedTitle}</span>
            </div>
            <div className="eventDate">
              <span>{filteredEvent.formattedDate + ", "}</span>
              <span>{filteredEvent.formattedTime}</span>
            </div>
          </div>
          <Image
            alt=""
            width={20}
            height={18}
            className="heart"
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteClick(filteredEvent);
            }}
            src={isFavorite(filteredEvent) ? "/redheart.png" : "/vector.png"}
          />
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
