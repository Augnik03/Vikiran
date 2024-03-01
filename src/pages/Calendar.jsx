import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Sidebar from "../components/Sidebar";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const events = [
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
  ];

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div style={{  marginTop: '100px', marginLeft: '300px', height: 'calc(100vh - 100px)' }}>
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
