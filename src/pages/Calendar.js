import moment from "moment/moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";
import CalendarCell from "../components/CalendarCell";

const Calendar = () => {
    moment.updateLocale("ru", { week: { dow: 1 } });
    const [day, setCurrentCalendar] = useState(moment());
    const firstDayToRender = day.clone().startOf('month').startOf('week');
    const firstDay = firstDayToRender.subtract(1, "day");

    const daysArray = [...Array(42)].map(() => firstDay.add(1, "day").clone());

    const previousHandler = () => setCurrentCalendar(prev => prev.clone().subtract(1, "month"));
    const nextHandler = () => setCurrentCalendar(next => next.clone().add(1, "month"));
    const todayHandler = () => setCurrentCalendar(moment());

    // const [eventsState, setEventsState] = useState();

    // useEffect(() => {
    //     localStorage.setItem()
    // }, [eventsState])

    return (
        <div className="main-container">
            <div className="calendar-container">
                <div className="calendar-panel">
                    <div className="calendar-editing">
                        <button className="add-event">Добавить</button>
                        <button className="edit-event">Обновить</button>
                    </div>
                    <div className="calendar-search">
                        <div className="input-icon"></div>
                        <input type="search" placeholder="Событие, дата или участник" className="input-search"></input>
                    </div>
                </div>
                <div className="calendar-date">
                    <button className="previous-month" onClick={previousHandler}></button>
                    <div className="current-date">{`${day.format("MMMM")[0].toUpperCase()}${day.format("MMMM").slice(1)}`} {day.year()}</div>
                    <button className="next-month" onClick={nextHandler}></button>
                    <button className="current-day" onClick={todayHandler}>Сегодня</button>
                </div>
                <div className="calendar-table">
                    {daysArray.map((dayItem, index) => <CalendarCell key={dayItem.unix()} dayItem={dayItem} index={index} day={day} />)}
                </div>
            </div>
        </div>
    )
}

export default Calendar;