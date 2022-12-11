import { useState } from "react";

const SearchEvent = ({ active, setActive, event }) => {
    return (
        <div className={active ? "search-event-window active" : "search-event-window"} onClick={() => setActive(false)}>
            <div className={active ? "search-window active" : "search-window"} onClick={e => e.stopPropagation()}>
                <h3>Найденное событие</h3>
                <p><span>Дата: </span>{event.date}</p>
                <p><span>Тема: </span>{event.title}</p>
                <p><span>Описание: </span>{event.text}</p>
            </div>
        </div>
    )
}

export default SearchEvent;