import React from "react";
import {useParams} from "react-router-dom";


import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
    id:'p1',
    title:'Empire state Building',
    description:'one of the most famous sky scrapers in the world',
    imageUrl:'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    address:'20 West 34th Street, the Empire State Building',
    location :{
        lat:40.74849200000003,
        lng:-73.985699
    },
    creator:'u1'
},
{
    id:'p2',
    title:'Empires state Building',
    description:'one of the most famous sky scrapers in the world',
    imageUrl:'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    address:'20 West 34th Street, the Empire State Building',
    location :{
        lat:40.74849200000003,
        lng:-73.985699
    },
    creator:'u2'
}
];
const UserPlaces = () =>{
   const userId = useParams().userId;
   const loadedPlaces = DUMMY_PLACES.filter(place => place.creator===userId);
  return <PlaceList items={loadedPlaces}/>
};
export default UserPlaces;