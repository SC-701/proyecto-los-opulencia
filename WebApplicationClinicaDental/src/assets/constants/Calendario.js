import moment from 'moment'
import {  momentLocalizer } from 'react-big-calendar'


export const localizer = momentLocalizer(moment)


export const eventos = [
    {
        title: 'Cita con Juan Pérez',
        start: new Date(),
        end: new Date(new Date().getTime() + 60 * 60 * 1000),
    },
    {
        title: 'Cita con Ana Martínez',
        start: new Date(new Date().setHours(new Date().getHours() + 2)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
]