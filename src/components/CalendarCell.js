import moment from "moment";

const CalendarCell = ({ dayItem, index, day, event }) => {
    const names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const isToday = moment().isSame(dayItem, "day") ? "calendar-cell today" : "calendar-cell";
    const isCurrent = dayItem.isSame(day, "month") ? true : false;

    const check = () => {
        return ((dayItem.day() === 0 || dayItem.day() === 6)
            ? <span className={isCurrent ? "cell-day red" : "cell-day"}>{dayItem.format("D")}</span>
            : <span className={isCurrent ? "cell-day current" : "cell-day"}>{dayItem.format("D")}</span>
        )
    }

    return (
        <div className={isToday}>
            {index < 7
                ? <span className={isCurrent ? "day-name current" : "day-name"}>{names[index]}, {check()}</span>
                : check()}
            <div className="calendar-event">
                <h3 className={isCurrent ? "event-title current" : "event-title"}>{event?.title || ""}</h3>
                <p className={isCurrent ? "event-text current" : "event-text"}>{event?.text || ""}</p>
            </div>
        </div>
    )
}

export default CalendarCell;