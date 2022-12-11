const Profile = ({ user }) => {
    return (
        <div className="main-container">
            Hello, {user?.username || localStorage.getItem("username")}
        </div>
    )
}

export default Profile;