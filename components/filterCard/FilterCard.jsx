"use client";
import { useState } from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlArrowDown } from "react-icons/sl";
const FilterCard = ({ events, onCategoryChange }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  const filterTitles = [...new Set(events.map(event => event.formattedTitle))]

  const handleCategorySelect = (event) => {
    onCategoryChange(event.target.value);
  };
  return (
    <>
      <div className="filterContainer">
        <div className="category">
          <h1>Category</h1>
          <select onChange={handleCategorySelect}>
            {filterTitles.map((title,index)=> (
              <option key={index} value={title}>{title}</option>
            ) )}
          </select>
        </div>

        <div className="sort">
          <h1>Date & Time</h1>

          <div className="inputsHead">
            <span>From</span>
            <span>To</span>
          </div>

          <div className="inputs">
            <div className="custom-date-input">
              <div
                className="inputField"
                onClick={() => setShowFromDatePicker((prev) => !prev)}
              >
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy | hh:mm aa"
                  placeholderText="dd/mm/yyyy | 12:00am"
                  open={showFromDatePicker}
                />
                <div style={{ width: "8px" }} />
                <SlArrowDown className="dropDown" />
              </div>
            </div>

            <div className="custom-date-input">
              <div
                className="inputField"
                onClick={() => setShowToDatePicker((prev) => !prev)}
              >
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy | hh:mm aa"
                  placeholderText="dd/mm/yyyy | 12:00am"
                  open={showToDatePicker}
                />
                <div style={{ width: "8px" }} />
                <SlArrowDown className="dropDown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
