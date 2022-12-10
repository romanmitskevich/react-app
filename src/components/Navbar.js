import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/info">Information</NavLink>
            <NavLink to="/profile"><span className="user-name">Name</span><div className="user-photo"></div></NavLink>
        </nav>
    )
}

export default Navbar;