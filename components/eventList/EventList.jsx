"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EventCard from "../card/EventCard";
import FilterCard from "../filterCard/FilterCard";
import useEventData from "@/app/hooks/useEventData";
import { ColorRing } from "react-loader-spinner";

const EventList = () => {
  const { events, favorites, isLoading } = useEventData();
  console.log("eventList ", events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFavoriteClick = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const handleRowClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="tableContainer">
        <h3>Events List</h3>
        <Image
          src="/menu.png"
          height={44}
          width={50}
          alt=""
          className="img"
          onClick={(e) => setShowModal((prev) => !prev)}
        />
        {showModal && <FilterCard />}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Image src="/sign.png" height={30} width={30} alt="" />
            </TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>TIME</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>LOCATION</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        
      
          <TableBody>
            {events.map((event, index) => (
              <TableRow
                key={event.id}
                className="tableRow"
                onClick={() => handleRowClick(event)}
              >
                <TableCell>{event.key}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell>{event.formattedDate}</TableCell>
                <TableCell>{event.geo.address.formatted_address}</TableCell>
                <TableCell className="favoriteCell">
                  <Image
                    src={favorites[index] ? "/redheart.png" : "/vector.png"}
                    height={18}
                    width={19}
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteClick(index);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        
      </Table>
      {selectedEvent && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <EventCard event={selectedEvent} />
          </div>
        </div>
      )}
    </>
  );
};

export default EventList;
