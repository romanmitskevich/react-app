import moment from "moment";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setUser(null);
        return navigate("/");
    }

    const events = JSON.parse(localStorage.getItem("events"));

    return (
        <div className="main-container">
            <div className="profile-container">
                <div className="profile-info">
                    <div>
                        <p>Имя пользователя: {user?.username || localStorage.getItem("username")}</p>
                        <p>Текущая дата: {moment().format("DD-MM-YYYY")}</p>
                    </div>
                    <button className="logout-button" onClick={logout}>Выйти</button>
                </div>
                {events?.length > 0 ? <div className="profile-events">События:
                    {events.map(item => <p>{item.date}: {item.title} - {item.text}</p>)}
                </div> : <div className="profile-events">Нет событий</div>}
            </div>
        </div>
    )
}

export default Profile;