
import useInput from "../Hooks/use-inputHook.js";
const SimpleInput = (props) => {
 
  const {
    enteredValue: enteredName,
     isValid,
    touchedValue,
    inputChangeHandler,
    inputBlurHandler,
    setStatus,
    setTouchedValue
  } = useInput((val) => val.trim() !== "");
  const {
    enteredValue:enteredEmail,
    isValid:emailIsValid,
    touchedValue:emailTouchedValue,
    inputChangeHandler:emailInputChangeHandler,
    inputBlurHandler:emailInputBlurHandler,
    setStatus:setEmailValidity,
    setTouchedValue:setEmailTouchedValue
  } = useInput((val)=>val.trim().includes('@'));



  let formIsValid = false;
  if (isValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTouchedValue(true);
    setEmailTouchedValue(true);

    if (enteredName.trim() === "") {
      setStatus(false);
      setEmailValidity(false);
      return;
    }
    if (!enteredEmail.trim().includes("@")) {
      setEmailValidity(false);
      return;
    }
    setStatus(true);
    setEmailValidity(true);
    console.log(enteredName);
    console.log(enteredEmail);
    // console.log(nameInputRef.current.value);
  };

  const newStatus = !isValid && touchedValue;
  const newEmailStatus = !emailIsValid && emailTouchedValue;

  return (
    <form onSubmit={submitHandler}>
      <div className={newStatus ? "form-control invalid" : "form-control "}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler} /*ref={nameInputRef}*/
        />
      </div>
      {newStatus && <p className="error-text">Name must not be empty!</p>}
      <div
        className={newEmailStatus ? "form-control invalid" : "form-control "}
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler} /*ref={nameInputRef}*/
        />
      </div>
      {newEmailStatus && (
        <p className="error-text">Enter a valid email address!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
