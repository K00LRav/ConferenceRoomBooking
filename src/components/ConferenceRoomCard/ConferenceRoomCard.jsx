import React from "react";
import "./ConferenceRoomCard.css";
import { Link } from "react-router-dom";

function ConferenceRoomCard() {
  return (
    <div className="room-container">
      <div className="room-card">
        <p>Room 1</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 2</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 3</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 4</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 5</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 6</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 7</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
      <div className="room-card">
        <p>Room 8</p>
        <div className="button-container">
          <Link to={`/RoomDetails/`}>See Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ConferenceRoomCard;
