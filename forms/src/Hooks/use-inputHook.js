import {useState} from 'react';
const useInputHook = (validate)=>{
    const [enteredValue,setVal] = useState('');
    const [ isValid, setStatus] = useState(false);
  const [ touchedValue, setTouchedValue] = useState(false);
  const valueIsValid = validate(enteredValue) ;
 


  const inputChangeHandler = (e)=>{
      

    setVal(e.target.value);
    
    if(validate(e.target.value)){
      setStatus(true)
      setTouchedValue(true)
      return
    }
    setStatus(false)

  };
  const inputBlurHandler = ()=>{
    setTouchedValue(true);
    console.log(valueIsValid)
    if(!valueIsValid){
      setStatus(false)
      return
    }
    setStatus(true);
  }

  return {
     enteredValue, isValid,touchedValue, inputChangeHandler, inputBlurHandler , setStatus,setTouchedValue
  }
};

export default useInputHook;