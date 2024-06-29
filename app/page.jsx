"use client";
import LeftNavbar from "../components/leftNavbar/LeftNavbar";
import UpcomingEvents from "../components/upcomingEvents/UpcomingEvents";
import EventList from "../components/eventList/EventList";
import "./globals.css";
import EventOfTheMonth from "@/components/eventOfTheMonth/EventOfTheMonth";
import Card from "@/components/belowCards/Card";
import useEventData from "./hooks/useEventData";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const { isLoading, events, favorites, setFavorites,highestRank } = useEventData();
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
              events={events}
              favorites={favorites}
              setFavorites={setFavorites}
            />
            <Card />
          </div>
          <div className="lastSection">
            <UpcomingEvents
              events={events}
              favorites={favorites}
              setFavorites={setFavorites}
            />
            <EventOfTheMonth highestRank={highestRank}/>
          </div>
        </>
      )}
    </div>
  );
}
