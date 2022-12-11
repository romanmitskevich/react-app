import moment from "moment";

const CalendarCell = ({ dayItem, index, day }) => {
    const names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const isToday = moment().isSame(dayItem, "day") ? "calendar-cell today" : "calendar-cell";
    const isCurrent = dayItem.isSame(day, "month") ? true : false;

    const check = () => {
        return ((dayItem.day() === 0 || dayItem.day() === 6)
            ? isCurrent ? <span className="cell-day red">{dayItem.format("D")}</span> : <span className="cell-day">{dayItem.format("D")}</span>
            : isCurrent ? <span className="cell-day current">{dayItem.format("D")}</span> : <span className="cell-day">{dayItem.format("D")}</span>);
    }

    return (
        <div className={isToday}>
            {index < 7
                ? isCurrent ? <span className="day-name current">{names[index]}, {check()}</span> : <span className="day-name">{names[index]}, {check()}</span>
                : check()}
            {/* {index < 7 ? <span className="day-name">{`${dayItem.day(index + 1).format("dddd")[0].toUpperCase()}${dayItem.day(index + 1).format("dddd").slice(1)}`}, {check()}</span> : check()} */}
            <div className="calendar-event">
                {isCurrent ? <h3 className="event-title current">Meet</h3> : <h3 className="event-title">Meet</h3>}
                {isCurrent ? <p className="event-text current">asdgas </p> : <p className="event-text">asdgas </p>}
            </div>
        </div>
    )
}

export default CalendarCell;