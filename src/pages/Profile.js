import moment from "moment";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setUser(null);
        return navigate("/");
    }

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
                <div className="profile-events">События:
                    <p>{`11.11.2022: Meet - play dota 2`}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;