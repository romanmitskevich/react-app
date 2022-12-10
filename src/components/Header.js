import Navbar from "./Navbar";

const Header = ({ user }) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo"></div>
                <Navbar user={user} />
            </div>
        </header>
    )
}

export default Header;