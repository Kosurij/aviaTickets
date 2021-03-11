import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import dataTickets from './FlightsData/flights.json';
import Ticket_item from './Components/Tickets/Ticket_item/Ticket_item';
import Sidebar from "./Components/Sidebar/Sidebar";


const App = () => {
    const LOW_PRICE = 'lowerPrice';
    const HIGH_PRICE = 'higherPrice';
    const DURATION = 'duration';
    const flights = dataTickets.result.flights;

    const [ticketCounter, setTicketCounter] = useState(2);
    let sortedArray = flights.slice(0, ticketCounter);
    const [ticketsArray, setTicketsArray] = useState(sortedArray)

    function counterHandler() {
        let counter = ticketCounter;
        counter = counter + 2;
        setTicketCounter(counter);
    }

    const [sorterTickets, setSorterTickets] = useState({active: ''});
    const [filtered, setFilteredTickets] = useState(
        {
            changes: {
                oneTransfer: 'false',
                noneTransfer: 'false'
            },
            company: {
                without: 'true',
                LOT: 'false',
                KL: 'false',
                AF: 'false',
                SU: 'false'
            },
            cost: {
                max: 150000,
                min: 0,
            }
        }
    );

    const changeSorterType = (e) => {
        let tmp = {...sorterTickets}
        tmp.active = e.target.id;
        setSorterTickets(tmp)
    }

    const changeFilterTransfer = (e) => {
        let tmp = {...filtered}
        let id = e.target.id;
        tmp.changes[id] = tmp.changes[id] === 'false' ? "true" : "false";
        setFilteredTickets(tmp)
    }

    const changeFilterCompany = (e) => {
        let tmp = {...filtered}
        let id = e.target.id;
        tmp.company[id] = tmp.company[id] === 'false' ? "true" : "false";
        tmp.company.without = tmp.company.without === 'true' ? "false" : "true";
        setFilteredTickets(tmp)
    }

    const changeFilterPrice = (e) => {
        let tmp = {...filtered}
        let id = e.target.id;
        tmp.cost[id] = +e.target.value;
        if (tmp.cost[id] === 0) tmp.cost[id] = 150000
        setFilteredTickets(tmp)
    }

    const filterTicketTransfer = useCallback((tickets, filter) => {
        if (filter.changes.oneTransfer !== 'false') {
            return tickets.filter(item => item.flight.stops > 0)
        } else {
            return tickets
        }
    })


    const filterTicketsCompany = useCallback((tickets, filter) => {
        return tickets.filter(item => {
            if (filter.company.without === 'true') {
                return item
            }
            return filter.company[item.flight.carrier.airlineCode] !== 'false' && filter.company.without !== 'true';
        })
    }, [])

    const filterTicketsCost = useCallback((tickets, filter) => {
        return tickets.filter(item => +item.flight.price.total.amount <= filter.cost.max)
    }, [])

    const allSorter = useCallback(
        (array, sorter) => {
            let ticketsArray = [...array];
            if (sorter.active === LOW_PRICE) {
                return ticketsArray.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
            }
            if (sorter.active === HIGH_PRICE) {
                return ticketsArray.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
            }
            if (sorter.active === DURATION) {
                return ticketsArray.sort((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
            } else {
                return ticketsArray
            }
        }, []
    )

    useEffect(() => {
        setTicketsArray(allSorter(filterTicketsCost(filterTicketTransfer((filterTicketsCompany(sortedArray, filtered)), filtered), filtered), sorterTickets))
    }, [ticketCounter, sorterTickets, filtered]);

    return (
        <div className="App">
            <div className="app_wrapper">
                <div className="main">
                    <Sidebar LOW_PRICE={LOW_PRICE} HIGH_PRICE={HIGH_PRICE} DURATION={DURATION}
                             changeFilterPrice={changeFilterPrice}
                             changeFilterTransfer={changeFilterTransfer}
                             changeFilterCompany={changeFilterCompany}
                             changeSorterType={changeSorterType}
                    />
                    <div className='tickets'>
                        {ticketsArray.length ? ticketsArray.map((item, index) => <Ticket_item key={index}
                                                                                              flight={item.flight}/>) :
                            <p className='noResults'> Нет результатов, соответствующих заданным критериям</p>}
                        {ticketsArray.length ?
                            <button className='button' onClick={counterHandler}> Показать еще</button> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
