import "./Card.css"
const Card = ({userName,profilepic,profileurl}) =>{
    return(
        <>
         <div className="card">
                <div className="img-div">
                    <img src={profilepic} alt="profile img"/>
                </div>
                <div className="username-div">
                    <h3 id="username1">{userName}</h3>
                    <a href={profileurl} target="_blank" className="visit-btn">Visit Profile</a>
                </div>
            </div>
        </>
    )
}

export default Card;