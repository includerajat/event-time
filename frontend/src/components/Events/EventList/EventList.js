import React from "react";
import EventItem from "./EventItem/EventItem";
import "./EventList.css";

const eventList = (props) => {
  const events = props.events.map((event) => {
    return (
      <EventItem
        userId={props.authUserId}
        key={event._id}
        eventId={event._id}
        price={event.price}
        date={event.date}
        title={event.title}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });
  return <ul className="event__list">{events}</ul>;
};

export default eventList;
