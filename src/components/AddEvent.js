import { useState } from "react";

const AddEvent = ({ active, setActive, events }) => {
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
        localStorage.setItem("events", JSON.stringify([...events, { date: date, title: title, text: text }]))
        setActive(false);
        setDate("");
        setTitle("");
        setText("");
    }

    return (
        <div className={active ? "add-event-window active" : "add-event-window"} onClick={() => setActive(false)}>
            <div className={active ? "add-window active" : "add-window"} onClick={e => e.stopPropagation()}>
                <h3>Добавление события</h3>
                <input type="text" value={date} onChange={onDateChange} placeholder="Дата события (ДД-ММ-ГГГГ)" autoComplete="off"></input>
                <input type="text" value={title} onChange={onTitleChange} placeholder="Тема события" autoComplete="off"></input>
                <input type="text" value={text} onChange={onTextChange} placeholder="Описание события" autoComplete="off"></input>
                <button className="add-event-button" onClick={handleEvent}>Добавить</button>
            </div>
        </div>
    )
}

export default AddEvent;