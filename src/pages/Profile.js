const Profile = ({ user }) => {
    return (
        <div className="main-container">
            Hello, {user.username}
        </div>
    )
}

export default Profile;