"use client";
import LeftNavbar from "../components/leftNavbar/LeftNavbar";
import UpcomingEvents from "../components/upcomingEvents/UpcomingEvents";
import EventList from "../components/eventList/EventList";
import "./globals.css";
import EventOfTheMonth from "@/components/eventOfTheMonth/EventOfTheMonth";
import Card from "@/components/belowCards/Card";
import useEventData from "./hooks/useEventData";
import { ColorRing } from "react-loader-spinner";
import { useState } from "react";
import useFavorites from "./hooks/useFavorites";

export default function Home() {
  const { isLoading, events, highestRank } = useEventData();
  const {handleFavoriteClick, isFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.formattedTitle === selectedCategory)
    : events;

  return (
    <div className="homeContainer">
      {isLoading ? (
        <div className="spinerLoaderContainer">
          <ColorRing
            visible={true}
            ariaLabel="color-ring-loading"
            wrapperStyle={{
              height: "45%",
              width: "45%",
            }}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <LeftNavbar />
          <div className="middleSection">
            <EventList
              filteredEvents={filteredEvents}
              isFavorite={isFavorite}
              handleFavoriteClick={handleFavoriteClick}
              onCategoryChange={handleCategoryChange}
              //this event is just to pass it to filter card component through props
              events={events}
            />
            <Card />
          </div>
          <div className="lastSection">
            <UpcomingEvents
              filteredEvents={filteredEvents}
              handleFavoriteClick={handleFavoriteClick}
              isFavorite={isFavorite}
            />
            <EventOfTheMonth highestRank={highestRank} />
          </div>
        </>
      )}
    </div>
  );
}
