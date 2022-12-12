const SearchEvent = ({ active, setActive, event }) => {
    return (
        <div className={active ? "search-event-window active" : "search-event-window"} onClick={() => setActive(false)}>
            <div className={active ? "search-window active" : "search-window"} onClick={e => e.stopPropagation()}>
                {event ? <div><h3>Найденное событие</h3>
                    <p><span>Дата: </span>{event.date}</p>
                    <p><span>Тема: </span>{event.title}</p>
                    <p><span>Описание: </span>{event.text}</p></div> : <h3>Событие не найдено</h3>}

            </div>
        </div>
    )
}

export default SearchEvent;