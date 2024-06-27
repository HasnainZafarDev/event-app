import LeftNavbar from "../components/leftNavbar/LeftNavbar";
import UpcomingEvents from "../components/upcomingEvents/UpcomingEvents";
import EventList from "../components/eventList/EventList";

import "./globals.css";
import EventOfTheMonth from "@/components/eventOfTheMonth/EventOfTheMonth";
import Card from "@/components/belowCards/Card";
import EventCard from "@/components/card/EventCard";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="">
          <LeftNavbar />
        </div>
        <div className="middleSection">
          <EventList />
          <Card />
        </div>
        <div className="flex flex-col gap-4">
          <UpcomingEvents />
          <EventOfTheMonth />
        </div>
      </div>
    </>
  );
}
