import { useEffect, useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoriteEvents")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteClick = (eventClicked) => {
    const existingEvents = JSON.parse(localStorage.getItem("favoriteEvents")) || [];

    const isEventExistIndex = existingEvents.findIndex(
      (event) => event.id === eventClicked.id
    );
    let updatedEvents;
    if (isEventExistIndex !== -1) {
      updatedEvents = existingEvents.filter(
        (event) => event.id !== eventClicked.id
      );
    } else {
      updatedEvents = [...existingEvents, eventClicked];
    }
    localStorage.setItem("favoriteEvents", JSON.stringify(updatedEvents));
    setFavorites(updatedEvents);
  };

  const isFavorite = (event) => {
    return favorites.some((fav) => fav.id === event.id);
  };

  return { favorites, handleFavoriteClick, isFavorite };
};

export default useFavorites;
