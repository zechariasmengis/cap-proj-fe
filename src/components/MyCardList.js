import { useEffect } from "react";
import UserCard from './UserCard'
import '../css/MyCardList.css'

function MyCardList(props) {

    const usercards = props.currentUser.user_cards;
    // console.log(usercards)

    return (
        <div className="my-card-list">
            <div className="card-list-username" >{props.currentUser.username}'s Cards</div>
            {usercards.map(user_card => {return (
                <div className="user-card-container">
                    <UserCard user_card={user_card}/>
                    <button onClick={() => props.deleteUserCard(user_card)} className="delete-card-button">Sell</button>
                </div>)})}
            {/* {console.log(props)} */}
            
        </div>
    )
}

export default MyCardList;