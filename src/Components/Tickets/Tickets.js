import Ticket_item from './Ticket_item/Ticket_item';
import style from './Tickets.module.css';
import dataTickets from '../../FlightsData/flights.json';
import {useEffect, useState} from 'react';


const Tickets = () => {

    const flights = dataTickets.result.flights;
    const [ticketCounter, setTicketCounter] = useState(2);

    let sortedArray = flights.slice(0, ticketCounter);
    const [ticketsArray, setTicketsArray] = useState(sortedArray)

    function clickHandler() {
        let counter = ticketCounter;
        counter = counter + 2;
        setTicketCounter(counter);
    }

    useEffect(() => {
        setTicketsArray(sortedArray)
    }, [ticketCounter]);


    return (
        <div className={style.tickets}>
            {ticketsArray.map((item, index) => <Ticket_item key={index} flight={item.flight}/>)}
            <button className={style.button} onClick={clickHandler}> Показать еще</button>
        </div>
    )
}

export default Tickets; 