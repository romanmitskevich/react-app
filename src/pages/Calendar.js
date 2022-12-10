const Calendar = () => {
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
                    <button className="previous-month"></button>
                    <div className="current-date">Месяц Год</div>
                    <button className="next-month"></button>
                    <button className="current-day">Сегодня</button>
                </div>
                <div className="calendar-table"></div>
            </div>
        </div>
    )
}

export default Calendar;