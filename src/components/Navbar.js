import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/info">Information</NavLink>
            {user?.username ? <div className="profile-logo">
                <NavLink to="/profile"><span className="user-name">{user.username}</span><div className="user-photo"></div></NavLink></div>
                : <NavLink to="/login"><button className="login-button">Log in</button></NavLink>}
        </nav >
    )
}

export default Navbar;