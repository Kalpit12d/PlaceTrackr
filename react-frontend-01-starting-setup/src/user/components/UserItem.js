import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import {Link} from "react-router-dom";
import './UserItem.css';
const UserItem = props => {
return (
    <li className="user-item">
    
    <Card className="user-item__content">
    <Link to={`/${props.id}/places`}>
    <div className="user-item__image">
      <Avatar image={props.image} alt={props.name}/>
    </div>
    <div className="user-item__info">
     <h2>{props.name}</h2>
     <h3>{props.placeCount} {props.placeCount===1?'Place' : 'Places'}</h3>
    </div>
    </Link>
    </Card>
    
    </li>
)
};
/// here wehenver a person houvers over the places all the places put by that user will open and this will be done by router dom instead of useing anchor tags
//and take it to respective router;
//intsead of using anchor tags we use link when we click on places it will take to respective users places which are created by them


export default UserItem;