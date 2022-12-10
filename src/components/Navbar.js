import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/info">Information</NavLink>
            <span className="user-name">{user?.username}</span>
            <NavLink to="/profile"><div className="user-photo"></div></NavLink>
        </nav>
    )
}

export default Navbar;