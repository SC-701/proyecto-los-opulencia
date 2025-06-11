import moment from 'moment'
import {  momentLocalizer } from 'react-big-calendar'


export const localizer = momentLocalizer(moment)


export const eventos = [
    {
        title: 'Cita con Juan Pérez',
        start: new Date(2025, 5, 8, 10, 30) ,
        end: new Date(2025, 5, 8, 12, 30),
    },
    {
        title: 'Cita con Ana Martínez',
        start: new Date( 2025, 5, 8, 14, 30),
        end: new Date (2025, 5, 8, 16, 30),
    }
]