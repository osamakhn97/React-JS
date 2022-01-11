import ExpenseForm from "./ExpenseForm.js";
import './NewExpense.css' ;
import {useState} from 'react' ;
const NewExpense = (props)=>{
    const addExpenseHandler = expense=>{
        const data = { id:Math.random().toString(),...expense};
        // console.log(data);
        props.getExpense(data);
    }
    
    // let formVisibility = false;
    const [status,setStatus] = useState(false);
    const changeStatus = ()=>{
        setStatus(!status);
    }

    if(status === false){
        return (
            <div className="new-expense">
                <button onClick={changeStatus}>Add new expense</button>
            </div>
        )
    }


    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense = {addExpenseHandler} changeHandler = {changeStatus}></ExpenseForm>
        </div>
        
    )


}

export default NewExpense