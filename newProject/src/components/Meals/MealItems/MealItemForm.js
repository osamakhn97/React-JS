import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";
import { useRef,useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid,setStatus] = useState(true);
  const inputVal = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = inputVal.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setStatus(false);
      return
    }
    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputVal}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: 1,
          defaultValue: "1",
          
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter the valid amount (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
