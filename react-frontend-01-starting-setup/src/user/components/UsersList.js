import React from "react";


import UserItem from "./UserItem";
import './UsersList.css';
import Card from "../../shared/components/UIElements/Card";




const UsersList = props => {
   if(props.items.length===0){
    return (
   <div className="centre">
   <Card>
   <h2>No Users found</h2> 
   </Card>
   </div>
    );
   }

   return <ul className="users-list">
    {props.items.map(user=>(
        <UserItem  key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>
    ))}
   </ul>
};

export default UsersList;

// props.items will hold array of users so now we mapped to jsx elements to evry user(as it is json format) and everys user has a property of id,name,image,placecount;