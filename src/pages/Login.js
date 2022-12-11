import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import constants from '../utils/constants';

const Login = ({ setUser }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("isLogined") === "true") {
            return navigate("/profile");
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((username !== constants.userCredentials.username) || (password !== constants.userCredentials.password)) {
            setError(true);
            return;
        }
        localStorage.setItem("isLogined", true);
        localStorage.setItem("username", username);
        setUser({ username: username });
        navigate("/profile");
    }

    const onUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="main-container">
            <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
                <div className="form-logo"></div>
                <div className="form-item">
                    <input type="text" id="username" className="form-input" value={username} onChange={onUserNameChange} placeholder="Username" required></input>
                </div>

                <div className="form-item">
                    <input type="password" id="password" className="form-input" value={password} onChange={onPasswordChange} placeholder="Password" required></input>
                </div>

                {isError && <div className="form-error">Имя пользователя или пароль введены неверно!</div>}

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