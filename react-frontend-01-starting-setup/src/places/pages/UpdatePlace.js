import React,{useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/util/Validators";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css';

const DUMMY_PLACES = [{
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




const UpdatePlace = () => {

    const [isLoading,setIsLoading] = useState(true);
  const placeId = useParams().placeId;
    


  
    const [formState,inputHandler,setFormData] = useForm({
   title:{
   value: '',
   isValid: false
   },
   description:{
     value:'',
     isValid: false
   }
    },false);
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
   useEffect(() => {
    if(identifiedPlace){
        setFormData({
            title:{
                value: identifiedPlace.title,
                isValid: true
                },
                description:{
                  value:identifiedPlace.description,
                  isValid: true
                }
        },true);
    }
    setIsLoading(false);
   },[setFormData,identifiedPlace]);
    
    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };
  
  if(!identifiedPlace){
    return( <div className="center">
   <Card>
   <h2>Could not find the place.</h2>
   </Card>
    
  
    
     </div>);
  }
  if(isLoading){
   return (  <div className="centre">
    <h2>Loading.</h2>
    </div>);
  }
    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input id="title" 
         element="input"
         type="text"
         label="Title" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="please enter a valid title."
        onInput={inputHandler}
        intialValue={formState.inputs.title.value}
        intialValid={formState.inputs.title.isValid}
        />
          <Input id="description" 
         element="textarea"
         
         label="Description" 
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText="please enter a valid description."
        onInput={inputHandler}
        intialValue={formState.inputs.description.value}
        intialValid={formState.inputs.description.isValid}
        />
        <Button  type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
};

export  default UpdatePlace;
//yahape humne setform data isliye dala h kyuki jab update krenge koi bhi place ko ek user toh phele backend se data fetch hoha yaha toh abhi dummy array ka use kiya toh jo data aayega wo data humko show krna pdega;
//isliye humne intial state default rkhdi frr identify ki place id uske according setform data call hogya aur make sure kiya ki ek baar chale usko humne useeffect mai rap krdiya jiski dependcy formdata aur identifiedplaceid pe h;
//aur yeh dono change hogi nhi toh ek baar hi chlega yeh