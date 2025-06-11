import React from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../assets/css/react-big-calendar.css'



const Calendario = ({eventos, localizer}) => {
    return (
        <div className="h-[500px] max-h-[600px] overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
            <Calendar
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%', padding: '1rem' }}
                views={['month', 'week', 'day', 'agenda']}
                popup
            />
        </div>
    )
}

export default Calendario
