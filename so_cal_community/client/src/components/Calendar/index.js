import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyCalendar() {
    const [currentEvent, setCurrentEvent] = useState(new Date());
    return (
        <div>
            <Calendar onChange={setCurrentEvent} value={currentEvent} />
        </div>
    );
}

export default Calendar;