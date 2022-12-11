import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    const userName = localStorage.getItem("username");

    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>Главная</NavLink>
            <NavLink to="/calendar" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>Календарь</NavLink>
            <NavLink to="/info" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>Информация</NavLink>
            {user?.username || userName ? <div className="profile-logo">
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}><span className="user-name">{userName}</span><div className="user-photo"></div></NavLink></div>
                : <NavLink to="/login"><button className="login-button">Вход</button></NavLink>}
        </nav >
    )
}

export default Navbar;