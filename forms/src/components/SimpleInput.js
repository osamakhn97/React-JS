import {useState,useEffect /*useRef*/} from 'react';
const SimpleInput = (props) => {
  const [enteredName,setName] = useState('');
  const [ isValid, setStatus] = useState(false);
  const [ touchedValue, setTouchedValue] = useState(false);
  //  const nameInputRef = useRef('');
  useEffect(()=>{
    if(enteredName){
      console.log("Name is valid");
    }

    },[enteredName])
  const inputChangeHandler = (e)=>{

    setName(e.target.value);
    if(e.target.value.trim() !== ''){
      setStatus(true)
      return
    }
    setStatus(false)
  };
  const submitHandler = (e)=>{
    e.preventDefault();
    setTouchedValue(true)

    if(enteredName.trim() === ''){
      setStatus(false)
      return
    }
    setStatus(true);
    console.log(enteredName);
    // console.log(nameInputRef.current.value);

  }
  const inputBlurHandler = (e)=>{
    setTouchedValue(true);
    if(enteredName.trim() === ''){
      setStatus(false)
      return
    }
    setStatus(true);
  }
  const newStatus = !isValid && touchedValue

  return (
    <form onSubmit={submitHandler}>
      <div className={newStatus ? 'form-control invalid' : 'form-control '}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputChangeHandler} onBlur={inputBlurHandler} /*ref={nameInputRef}*/ />
      </div>
      {newStatus && <p className='error-text'>Name must not be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
