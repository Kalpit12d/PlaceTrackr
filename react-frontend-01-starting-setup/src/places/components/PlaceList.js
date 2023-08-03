import React from "react";

import Button from "../../shared/components/FormElements/Button";
import './PlaceList.css';
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    if(props.items.length===0){
        return (
            <div className="place-list center">
             <Card>
                <h2>
                    No places found.maybe create one?
                </h2>
                <Button to="/places/new">Share place</Button>
             </Card>
            </div>
        )
    }
    return <ul className="place-list">
      {props.items.map(place => <PlaceItem
       key={ place.id} 
       id={place.id} 
       image={place.imageUrl}
        title={place.title} 
        description={place.description}
         address={place.address} 
         creatorId={place.creator} 
         coordinates={place.location} 
            
         />)}
    </ul>
};

export default PlaceList;

//in this we are outputiin list of places


/*
"icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ]
  */

  /* "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]*/