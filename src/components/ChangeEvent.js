import { useState } from "react";

const ChangeEvent = ({ active, setActive }) => {
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const onDateChange = (e) => {
        setDate(e.target.value)
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onTextChange = (e) => {
        setText(e.target.value)
    }

    const handleEvent = () => {
        const changedEvents = JSON.parse(localStorage.getItem("events")).map(item => item.date === date ? { ...item, title: title, text: text } : item);
        localStorage.setItem("events", JSON.stringify(changedEvents));
        setActive(false);
        setDate("");
        setTitle("");
        setText("");
    }

    return (
        <div className={active ? "change-event-window active" : "change-event-window"} onClick={() => setActive(false)}>
            <div className={active ? "change-window active" : "change-window"} onClick={e => e.stopPropagation()}>
                <h3>Редактирование события</h3>
                <input type="text" value={date} onChange={onDateChange} placeholder="Дата события (ДД-ММ-ГГГГ)" autoComplete="off"></input>
                <input type="text" value={title} onChange={onTitleChange} placeholder="Тема события" autoComplete="off"></input>
                <input type="text" value={text} onChange={onTextChange} placeholder="Описание события" autoComplete="off"></input>
                <button className="change-event-button" onClick={handleEvent}>Редактировать</button>
            </div>
        </div>
    )
}

export default ChangeEvent;