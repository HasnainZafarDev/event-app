"use client";
import { useState } from "react";
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
const EventList = ({
  events,
  favorites,
  setFavorites,
  filteredEvents,
  onCategoryChange,
}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFavoriteClick = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const handleRowClick = (filteredEvent) => {
    setSelectedEvent(filteredEvent);
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
        {showModal && <FilterCard events={events}  onCategoryChange={onCategoryChange} />}
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
          {filteredEvents?.map((filteredEvent, index) => (
            <TableRow
              key={filteredEvent.id}
              className="tableRow"
              onClick={() => handleRowClick(filteredEvent)}
            >
              <TableCell>{filteredEvent.key}</TableCell>
              <TableCell>{filteredEvent.formattedTitle}</TableCell>
              <TableCell>{filteredEvent.time}</TableCell>
              <TableCell>{filteredEvent.formattedDate}</TableCell>
              <TableCell>{filteredEvent?.geo?.address.formatted_address}</TableCell>
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
