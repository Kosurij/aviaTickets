import style from './Ticket_to.module.css';
import rightArrow from './rightArrow.png';
import watch from './watch.png';
import {useState, useEffect} from 'react';

const TicketTo = (props) => {

    let DataDeparture = new Date(props.flight.flight.legs[0].segments[0].departureDate);
    let minuteDeparture = DataDeparture.getMinutes().toString();
    const checkerMinute = () => {
        return minuteDeparture.length < 2 ? minuteDeparture = minuteDeparture + '0' : minuteDeparture
    }
    checkerMinute()

    let hoursDeparture = DataDeparture.getHours();
    let dayDeparture = DataDeparture.getDate();
    let monthDeparture = (DataDeparture.toLocaleString('ru', {month: 'short'}));

    let DataArrival = new Date(props.flight.flight.legs[0].segments[0].arrivalDate)
    let timeArrival = `${DataArrival.getHours()}:${DataArrival.getMinutes()}`;
    let dayArrival = DataArrival.getDate();
    let monthArrival = (DataArrival.toLocaleString('ru', {month: 'short'}));

    let timeInFly = `${DataArrival.getHours() - DataDeparture.getHours()} ч. ${DataArrival.getMinutes() - DataDeparture.getMinutes()} мин.`;

    return (
        <div className={style.ticketTo}>
            <div className={style.direction}>
                <div className="from"> {props.flight.flight.legs[0].segments[0].departureCity.caption}, <span
                    style={{textTransform: "uppercase"}}> {props.flight.flight.legs[0].segments[0].departureAirport.caption} </span>
                    <span
                        style={{color: "#258DD0"}}> ({props.flight.flight.legs[0].segments[0].departureAirport.uid}) </span>
                </div>
                <div className={style.arrow}>
                    <img src={rightArrow} alt=""/>
                </div>
                <div className="to"> {props.flight.flight.legs[0].segments[0].arrivalCity.caption} <span
                    style={{textTransform: "uppercase"}}> {props.flight.flight.legs[0].segments[0].arrivalAirport.caption} </span>
                    <span
                        style={{color: "#258DD0"}}> ({props.flight.flight.legs[0].segments[0].arrivalAirport.uid}) </span>
                </div>
            </div>
            <div className={style.time_data}>
                <div className="departure">
                    <span className='data__time'>
                        {hoursDeparture}:{minuteDeparture}</span> <span
                    className={style.data_date}> {dayDeparture} {monthDeparture}</span>
                </div>
                <div className={style.duration}>
                    <img src={watch} alt=""/>
                    {timeInFly}
                </div>
                <div className="arrival">
                    <span className='data__time'> {timeArrival}</span> <span
                    className={style.data_date}> {dayArrival} {monthArrival} </span>
                </div>
            </div>
            {props.flight.flight.stops !== undefined && props.flight.flight.stops > 0 &&
            <div className={style.transfer}> {props.flight.flight.stops} пересадка(-ки) </div>}
            <div className={style.carrier}>
                Рейс выполняет: <span> {props.flight.flight.carrier.caption} </span>
            </div>
        </div>
    )
}

export default TicketTo;