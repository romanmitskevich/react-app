import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    const userName = localStorage.getItem("username");

    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/info">Information</NavLink>
            {user?.username || userName ? <div className="profile-logo">
                <NavLink to="/profile"><span className="user-name">{userName}</span><div className="user-photo"></div></NavLink></div>
                : <NavLink to="/login"><button className="login-button">Log in</button></NavLink>}
        </nav >
    )
}

export default Navbar;