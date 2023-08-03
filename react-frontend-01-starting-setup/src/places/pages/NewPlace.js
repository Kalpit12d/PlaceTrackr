import React  from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, 
    VALIDATOR_REQUIRE 
} from '../../shared/components/util/Validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';





const NewPlace = () => {
  
  const [formState,inputHandler] = useForm({
    title:{
        value: '',
        isValid: false
    },
    description:{
        value: '',
        isValid: false
    },
    address:{
        value: '',
        isValid: false
    }
},false);


   
   
 
const placeSubmitHandler = event => {
    event.preventDefault();
  console.log(formState.inputs);
};

    return (
<form className='place-form' onSubmit={placeSubmitHandler}>
 <Input 
 id="title"
 element="input" 
 type="text"
  label="Title"
  validators={[VALIDATOR_REQUIRE()]}
  errorText="please enter the valid text"
  onInput ={inputHandler}
   />
   <Input 
   id="description"
   element="textarea" 
   
  label="Description"
  validators={[VALIDATOR_MINLENGTH(5)]}
  errorText="please enter the valid description."
  onInput ={inputHandler}
   />
   <Input 
   id="address"
   element="input" 
   
  label="Address"
  validators={[VALIDATOR_REQUIRE]}
  errorText="please enter the valid address."
  onInput ={inputHandler}
   />
   <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
</form>
    );
};

export default NewPlace ;


//yaha pe ek form bnayenge jo sara input lega
//here we willl be passing array as a prop in validators to ensure whatever is input given by user is valid or not;
//input componenet will hold the logic for that;
//use call back will avoid to go into the infinite loop coz titlehandler will be excuted when newplce render when any chane in input or isvalid props
//again and again use effect in child will excute which will then excute titlehandler this goes in infinite loop;
//to avoid this we use call back;
//we use titlehandler as there can be multiple inputs so we want to check weheter whole forms that inludes all the input is valid or not;