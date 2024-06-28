'use client'
import React, { useEffect, useState } from 'react'

const useEventData = () => {
    const [favorites, setFavorites] = useState([]);
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(true);
            const response = await fetch(
              "https://api.predicthq.com/v1/events?category=festivals&country=PK",
              {
                headers: {
                  Authorization: "Bearer cqgQ-X_cs6V7x6jK4QgI1j7j8YV0j2oI8vSnMOS0",
                  Accept: "application/json",
                },
              }
            );
            const data = await response.json();
            const formattedEvents = data.results.map((event,index:number) => {
                const key = index + 1;
              const date = new Date(event.start);
              const hours = date.getHours();
              const minutes = date.getMinutes();
              const formattedTime = `${
                hours % 12 || 12
              }:${minutes.toString().padStart(2, "0")} ${
                hours < 12 ? "AM" : "PM"
              }`;
              const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
              const months = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
              ];
              const formattedDate = `${days[date.getDay()]} ${date.getDate()} ${
                months[date.getMonth()]
              }`;
              return {
                ...event,
                time: formattedTime,
                formattedDate: formattedDate,
                key
              };
            });
            setEvents(formattedEvents);
            setFavorites(Array(formattedEvents.length).fill(false))
            setIsLoading(false);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
        fetchData();
      }, []);

      return{
        events,
        favorites,
        setFavorites,
        isLoading
      }
}

export default useEventData
