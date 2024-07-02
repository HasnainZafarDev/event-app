"use client";
import React, { useEffect, useState } from "react";

const useEventData = () => {
  const [favorites, setFavorites] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [highestRank, setHighestRank] = useState(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoriteEvents"))
  setFavorites(savedFavorites) 
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
        ///////////////////For Highest Rank
        const highestRankObject = data.results.reduce((prev, current) => {
          return prev.rank > current.rank ? prev : current;
        });
        ///////////////////For Formatted Title for highest Rank object
        highestRankObject.formattedTitle = highestRankObject.title
          .split(" ")
          .slice(0, 2)
          .join(" ");

        ///////////////////For Formatted Time --- for every object
        const formattedEvents = data.results.map((event, index) => {
          const key = index + 1;
          const date = new Date(event.start);
          const hours = date.getHours();
          const minutes = date.getMinutes();
          ///////////////////For Formatted Title for every object
          const formattedTitle = event.title.split(" ").slice(0, 2).join(" ");

          const formattedTime = `${hours % 12 || 12}:${minutes
            .toString()
            .padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
          ///////////////////For Formatted Time --- for highest object rank
          highestRankObject.time = `${hours % 12 || 12}:${minutes
            .toString()
            .padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;

          ///////////////////For Formatted  Date for every element
          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

          const formattedDate = `${days[date.getDay()]} ${date.getDate()} ${
            months[date.getMonth()]
          }`;
          ///////////////////For Formatted  Date for every highest object
          highestRankObject.formattedDate = `${
            days[date.getDay()]
          } ${date.getDate()} ${months[date.getMonth()]}`;

          return {
            ...event,
            formattedTime,
            formattedDate,
            formattedDateWithYear: `${formattedDate} ${date.getFullYear()}`,
            key,
            highestRank,
            formattedTitle,
          };
        });
        setHighestRank(highestRankObject);
        setEvents(formattedEvents);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [setFavorites]);

  return {
    events,
    favorites,
    setFavorites,
    isLoading,
    highestRank,
  };
};

export default useEventData;
