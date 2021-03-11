import logoLot from './lot_logo.svg';
import style from './Ticket_item.module.css';
import TicketTo from './TicketTo/TicketTo';
import TicketBack from './TicketBack/TicketBack';


const Ticket_item = (props) => {

    return (
        <div className={style.item}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logoLot} />
                </div>
                <div className={style.price}>
                    <div className={style.price_cost}> {props.flight.price.total.amount} {props.flight.price.total.currencyCode} </div>
                    <div className={style.price_description}> Стоимость для одного взрослого пассажира </div>
                    <div className={style.price.baggage}> Багаж: {props.flight.servicesStatuses.baggage.caption} </div>
                </div>
            </div>
            <TicketTo flight={props} />
            <TicketBack flight={props} />
            <button className={style.button}> Выбрать </button>
        </div>
    )
}

export default Ticket_item;