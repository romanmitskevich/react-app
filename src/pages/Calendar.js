import moment from "moment/moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";
import CalendarCell from "../components/CalendarCell";
import AddEvent from "../components/AddEvent";
import ChangeEvent from "../components/ChangeEvent";
import SearchEvent from "../components/SearchEvent";

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
    const [addActive, setAddActive] = useState(false);
    const [changeActive, setChangeActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [data, setData] = useState("");
    const [event, setEvent] = useState("");
    // const [event, setEvent] = useState(null);

    const displayAddWindow = () => {
        setAddActive(true);
    }

    const displayChangeWindow = () => {
        setChangeActive(true);
    }

    const onInputChange = (e) => {
        setData(e.target.value)
    }

    const onEnterPress = (e) => {
        if (e.code === "Enter") {
            const searchEvent = JSON.parse(localStorage.getItem("events")).find(item => item.date === data || item.title === data || item.text === data);
            setEvent(searchEvent);
            setSearchActive(true);
        }
    }

    const events = JSON.parse(localStorage.getItem("events")) || [];

    return (
        <div className="main-container">
            <div className="calendar-container">
                <div className="calendar-panel">
                    <div className="calendar-editing">
                        <button className="add-event" onClick={displayAddWindow}>Добавить</button>
                        <button className="edit-event" onClick={displayChangeWindow}>Редактировать</button>
                    </div>
                    <div className="calendar-search">
                        <div className="input-icon"></div>
                        <input type="search" placeholder="Событие, дата или участник" className="input-search" value={data} onChange={onInputChange} onKeyDown={onEnterPress}></input>
                    </div>
                </div>
                <div className="calendar-date">
                    <button className="previous-month" onClick={previousHandler}></button>
                    <div className="current-date">{`${day.format("MMMM")[0].toUpperCase()}${day.format("MMMM").slice(1)}`} {day.year()}</div>
                    <button className="next-month" onClick={nextHandler}></button>
                    <button className="current-day" onClick={todayHandler}>Сегодня</button>
                </div>
                <div className="calendar-table">
                    {daysArray.map((dayItem, index) => <CalendarCell key={dayItem.unix()} dayItem={dayItem} index={index} day={day} event={events.find(item => dayItem.format("DD-MM-YYYY") === item.date)} />)}
                </div>
            </div>
            <AddEvent active={addActive} setActive={setAddActive}
                // setEvent={setEvent}
                events={events}></AddEvent>
            <ChangeEvent active={changeActive} setActive={setChangeActive}></ChangeEvent>
            <SearchEvent active={searchActive} setActive={setSearchActive} event={event}></SearchEvent>
        </div>
    )
}

export default Calendar;