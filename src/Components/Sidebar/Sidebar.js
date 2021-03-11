import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
            <div className={s.wrapper}>
                <div className={s.item}>
                    <div className='sort'>
                        <div className={s.name}>
                            <h4> Сортировать </h4>
                        </div>
                        <div>
                            <label><input type="radio" name='radio' id={props.LOW_PRICE}
                                          onChange={props.changeSorterType}/> - по
                                возрастанию цены </label>
                        </div>
                        <div>
                            <label> <input type="radio" name='radio' id={props.HIGH_PRICE}
                                           onChange={props.changeSorterType}/> - по
                                убыванию цены </label>
                        </div>
                        <div>
                            <label> <input type="radio" name='radio' id={props.DURATION}
                                           onChange={props.changeSorterType}/> - по
                                времени в пути </label>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className="sidebar__sort">
                        <div className={s.name}>
                            <h4> Фильтровать </h4>
                        </div>
                        <div>
                            <label> <input type="checkbox" id='oneTransfer' onChange={props.changeFilterTransfer}/> - 1
                                пересадка </label>
                        </div>
                        <div>
                            <label> <input type="checkbox" id='noneTransfer' onChange={props.changeFilterTransfer}/> -
                                без
                                пересадок </label>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div>
                        <div className={s.name}>
                            <h4> Цена </h4>
                        </div>
                        <div>
                            <label> <span>От</span> <input type="text" defaultValue='0' id='min'
                                                           onChange={props.changeFilterPrice}/></label>
                        </div>
                        <div>
                            <label> <span>До</span> <input type="text" id='max' onChange={props.changeFilterPrice}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div>
                        <div className={s.name}>
                            <h4> Авиакомпании </h4>
                        </div>
                        <div className={s.company}>
                            <div className={s.companyLeft}>
                                <label> <input type="checkbox" id='LOT' onChange={props.changeFilterCompany}/> LOT
                                    Polish Airlines </label>
                            </div>
                            <div className={s.companyRight}>
                                <div> от 21049 р.</div>
                            </div>
                        </div>
                        <div className={s.company}>
                            <div className={s.companyLeft}>
                                <label> <input type="checkbox" id='SU'
                                               onChange={props.changeFilterCompany}/> Аэрофлот - российские
                                    авиалинии </label>
                            </div>
                            <div className={s.companyRight}>
                                <div className={s.price}> от 31733 р.</div>
                            </div>
                        </div>
                        <div className={s.company}>
                            <div className={s.companyLeft}>
                                <label> <input type="checkbox" id='AF' onChange={props.changeFilterCompany}/> Air
                                    France </label>
                            </div>
                            <div className={s.companyRight}>
                                <div className={s.price}> от 31733 р.</div>
                            </div>
                        </div>
                        <div className={s.company}>
                            <div className={s.companyLeft}>
                                <label> <input type="checkbox" id='KL' onChange={props.changeFilterCompany}/> KLM
                                </label>
                            </div>
                            <div className={s.companyRight}>
                                <div className={s.price}> от 31733 р.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;