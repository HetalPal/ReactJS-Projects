import "./UserProfileCard.css"

function UserProfileCard({
    name,
    profile,
    role,
    from,
    best,
    strikeRate
}){
    return(
        <div className="profile">
            <img src={profile} alt="Profile" className="profile-img" />
            <h2>{name}</h2>
            <div className="info">
                <p>Role : {role}</p>
                <p>From : {from}</p>
                <p>Best : {best}</p>
                <p>Strike-Rate : {strikeRate}</p>
            </div>

        </div>
    );
}

export default UserProfileCard;