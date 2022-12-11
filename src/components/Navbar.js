import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    const userName = localStorage.getItem("username");

    return (
        <nav className="navbar">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/calendar">Календарь</NavLink>
            <NavLink to="/info">Информация</NavLink>
            {user?.username || userName ? <div className="profile-logo">
                <NavLink to="/profile"><span className="user-name">{userName}</span><div className="user-photo"></div></NavLink></div>
                : <NavLink to="/login"><button className="login-button">Вход</button></NavLink>}
        </nav >
    )
}

export default Navbar;