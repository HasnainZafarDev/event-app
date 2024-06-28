"use client";
import EventList from "@/components/eventList/EventList";
import LeftNavbar from "@/components/leftNavbar/LeftNavbar";
import React from "react";
import useEventData from "../hooks/useEventData";
import { ColorRing } from "react-loader-spinner";

const page = () => {
  const { isLoading, events, favorites, setFavorites } = useEventData();
  return (
    <div className="flex">
      {isLoading ? (
        <div className="spinerLoaderContainer"
        style={{
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "height": "100vh",
          "width": "100%",
        }}>
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
          <div className="flex-1 ml-6 mr-4 mt-2">
            <EventList
              events={events}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
