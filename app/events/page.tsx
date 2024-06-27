import EventList from "@/components/eventList/EventList";
import LeftNavbar from "@/components/leftNavbar/LeftNavbar";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <LeftNavbar />
      <div className="flex-1 ml-6 mr-4 mt-2">
        <EventList />
      </div>
    </div>
  );
};

export default page;
