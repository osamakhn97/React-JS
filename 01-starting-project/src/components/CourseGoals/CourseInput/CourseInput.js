import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
import ErrorModal from "../../ErrorModel.js";



const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setStatus] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setStatus(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setStatus(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  const reset = () =>{
    setStatus(true);

  }

  const errorModal =  !isValid && <ErrorModal
  title = "Error Occured!"
  desc = "Something went wrong!!!"
  reset = {reset}
  />;

 
  return (
    <div>

    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? 'invalid': ''}`}> */}
      <div className={`${styles['form-control']} ${!isValid ? styles.invalid: ''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" >Add Goal</Button>
    </form>
    {errorModal}

   

    </div>
  );
};

export default CourseInput;
