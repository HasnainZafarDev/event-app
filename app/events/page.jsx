"use client";
import EventList from "@/components/eventList/EventList";
import LeftNavbar from "@/components/leftNavbar/LeftNavbar";
import useEventData from "../hooks/useEventData";
import { ColorRing } from "react-loader-spinner";
import Card from "@/components/belowCards/Card";

const page = () => {
  const { isLoading, events, favorites, setFavorites } = useEventData();
  return (
    <div className="mainEventDiv">
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
        <>
          <LeftNavbar />
          <div className="subEventDiv">
            <EventList
              events={events}
              favorites={favorites}
              setFavorites={setFavorites}
            />
            <Card/>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
