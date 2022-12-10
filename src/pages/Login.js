import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import constants from '../utils/constants';

const Login = ({ setUser }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username !== constants.userCredentials.username || password !== constants.userCredentials.password) {
            document.querySelector(".form-error").style.display = "block";
            return;
        }
        setUser({ username: username, password: password });
        navigate("/profile");
        document.querySelector(".user-name").style.display = "block";
    }

    return (
        <div className="main-container">
            <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
                <div className="form-logo"></div>
                <div className="form-item">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" className="form-input" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" required></input>
                </div>

                <div className="form-item">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required></input>
                </div>

                <div className="form-error">Имя пользователя или пароль введены неверно!</div>

                <div className="form-item">
                    <button type="submit" className="submit-button">
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;