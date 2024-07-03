"use client";
import EventList from "@/components/eventList/EventList";
import LeftNavbar from "@/components/leftNavbar/LeftNavbar";
import useEventData from "../hooks/useEventData";
import { ColorRing } from "react-loader-spinner";
import Card from "@/components/belowCards/Card";
import { useState } from "react";
import useFavorites from "../hooks/useFavorites";

const page = () => {
  const { isLoading, events } = useEventData();
  const { favorites, handleFavoriteClick, isFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.formattedTitle === selectedCategory)
    : events;
  return (
    <div className="mainFavoriteContainer">
    <div className="leftNavbar">
      <LeftNavbar />
    </div>
    <div className="subFavoriteContainer">
        <EventList
          filteredEvents={favorites}
          isFavorite={isFavorite}
          handleFavoriteClick={handleFavoriteClick}
          onCategoryChange={handleCategoryChange}
          //this event is just to pass it to filter card component through props
          events={events}
        />
        <Card />
      </div>
    </div>
  );
};

export default page;
