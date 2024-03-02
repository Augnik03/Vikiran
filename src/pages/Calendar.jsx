import React, { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Sidebar from "../components/Sidebar";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'Meeting 2',
      start: new Date(2024, 2, 15), // March 15, 2024
      end: new Date(2024, 2, 15),
    },
    {
      title: 'Appointment',
      start: new Date(2024, 2, 20), // March 20, 2024
      end: new Date(2024, 2, 20),
    },
    // Add more events as needed
  ]);

  const handleAddEvent = () => {
    // Create a new event object
    const newEvent = {
      title: 'New Event',
      start: new Date(), // Set the start date to the current date
      end: new Date(), // Set the end date to the current date
    };

    // Update the events array with the new event
    setEvents([...events, newEvent]);
  };

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div style={{ marginTop: '100px', marginLeft: '300px', height: 'calc(100vh - 100px)' }}>
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleAddEvent}>Add Event</button>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </>
  );
}
