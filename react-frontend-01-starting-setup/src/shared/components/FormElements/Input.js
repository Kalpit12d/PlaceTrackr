import React, {useReducer , useEffect} from "react";


import { validate } from "../util/Validators";
import './Input.css';

const inputReducer = (state,action) => {
    switch(action.type){
        case 'CHANGE' :
            return {
        ...state, 
        value: action.val,
        isValid: validate(action.val, action.validators)
                 
            };
            case 'TOUCH':
                return {
                    ...state,
                    isTouched: true
                };
            default:
                return state;
    }
};

const Input = props => {
   const [inputState,dispatch] = useReducer(inputReducer,
    {value: props.intialValue || '' ,
    isTouched: false,
    isValid: props.intialValid || false
});
   
   const {value,isValid} =inputState;
   const {id,onInput} = props;
   
   useEffect(() => {
    onInput(id,value,isValid)
   },[id,value,isValid,onInput]);
   
   
   const changeHandler = event  => {
    dispatch({type: 'CHANGE' ,
     val: event.target.value,
     validators: props.validators,
     isTouched: false
    });
    };

const touchHandler = () => {
    dispatch({
        type: 'TOUCH'
    })
};
const element = props.element === 'input' ? (
  <input id={props.id} 
  type={props.type} 
  placeholder={props.placeholder} 
  onChange={changeHandler}
  onBlur={touchHandler}
  value={inputState.value}
/>
) : (
 <textarea id={props.id} 
 rows={props.rows ||3 } 
 onChange={changeHandler}
 onBlur={touchHandler}
    value={inputState.value}
 />
);
    return <div className={`form-control ${!inputState.isValid && inputState.isTouched  &&'form-control--invalid'}`}> 
   <label htmlFor={props.id}>{props.label}</label>
   {element}
{!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
};

export default Input;


//when we have to manage two state and they are connected then instead of use state we can use usereducer;
//here input and validation is connected state;
//...state->this is spread operator these copy old state (key-value pair) then we can overwrite selected keys;  
//use effect -> runs some logic when some dependency changes-(function to run,array of dependecy);