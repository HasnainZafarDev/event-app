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
  const { handleFavoriteClick, isFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.formattedTitle === selectedCategory)
    : events;
  return (
    <>
      {isLoading ? (
        <div
          className="spinerLoaderContainer"
          style={{
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            height: "100vh",
            width: "100%",
          }}
        >
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
        <div className="mainFavoriteContainer">
          <div className="leftNavbar">
            <LeftNavbar />
          </div>
          <div className="subFavoriteContainer">
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
        </div>
      )}
    </>
  );
};

export default page;
