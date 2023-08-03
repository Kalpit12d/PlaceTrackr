import React,{useState,useContext} from "react";



import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button"
import Modal from "../../shared/components/UIElements/Modal";
import './PlaceItem.css';
import { AuthContext } from "../../shared/context/auth-context";

const PlaceItem = props => {
  const auth = useContext(AuthContext);
const [showMap,setShowMap] = useState(false);
const [showConfirmModal,setShowConfirmModal] = useState(false);
const openMapHandler = () => setShowMap(true);

const closeMapHandler = () => setShowMap(false);
  
const showDeleteWarningHandler = () => {
  setShowConfirmModal(true);
};
const cancelDeleteHandler = () => {
  setShowConfirmModal(false);
};
const confirmDeleteHandler = () =>{
  setShowConfirmModal(false);
  console.log('Deleting');
};
  
  return  ( <React.Fragment>
     <Modal

show={showMap}

onCancel={closeMapHandler}

header={props.address}

contentClass="place-item__modal-content"

footerClass="place-item__modal-actions"

footer={<Button onClick={closeMapHandler}>CLOSE</Button>}

>

<div className="map-container" >

  <iframe title="map" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"

  src={'https://maps.google.com/maps?q=' + props.coordinates.lat.toString() + ',' + props.coordinates.lng.toString() + '&t=&z=15&ie=UTF8&iwloc=&output=embed'}></iframe>

</div>

</Modal>
<Modal
 show={showConfirmModal}
 onCancel={cancelDeleteHandler}
 header="are you sure?" 
footerClass="place-item__modal-actions"
footer={
  <React.Fragment>
    <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
    <Button danger onClick={confirmDeleteHandler}>Delete</Button>
  </React.Fragment>
}
 >
 
 <p>Do you want to proceed and delete this place?please note it can't be undone thereafter.</p>

</Modal>
    <li className="place-item">
    <Card className="place-item__content">
    <div className="place-item__image">
    <img src={props.image} alt={props.title}/>

    </div>
    <div className="place-item__info">
     <h2>{props.title}</h2>
     <h3>{props.address}</h3>
     <p>{props.description}</p>
    </div>
    <div className="place-item__actions">
      <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
     {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>}
     
      
      {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler} >DELETE</Button>}
    </div>
    </Card>
    </li>
    </React.Fragment>
    );
    
    
};

export default PlaceItem;


/*<Modal
   show={showMap} 
  onCancel={closeMapHandler} 
  header={props.address}  
  contentClass="place-item__modal-content"
  footerClass="place-item__modal-actions"
  footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
   >

   <div className="map-container" >

  <iframe title="map" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"

  src={'https://maps.google.com/maps?q=' + props.coordinates.lat.toString() + ',' + props.coordinates.lng.toString() + '&t=&z=15&ie=UTF8&iwloc=&output=embed'}></iframe>

</div> */