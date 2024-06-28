"use client";
import LeftNavbar from "../components/leftNavbar/LeftNavbar";
import UpcomingEvents from "../components/upcomingEvents/UpcomingEvents";
import EventList from "../components/eventList/EventList";

import "./globals.css";
import EventOfTheMonth from "@/components/eventOfTheMonth/EventOfTheMonth";
import Card from "@/components/belowCards/Card";
import EventCard from "@/components/card/EventCard";
import useEventData from "./hooks/useEventData";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const { isLoading } = useEventData();
  return (
    <>
      <div className="homeContainer">
        
        <div className="">
          <LeftNavbar />
        </div>

        <div className="loadingComponents">
          <div className="middleSection">
            <EventList />
            <Card />
          </div>

          <div className="flex flex-col gap-4">
            <UpcomingEvents />
            <EventOfTheMonth />
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <ColorRing
              visible={true}
              height="150"
              width="150"
              ariaLabel="color-ring-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20%",
                width: "80%",
                marginLeft: "250px",
              }}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            /> */
}
