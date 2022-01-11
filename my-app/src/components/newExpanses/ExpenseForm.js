import './ExpenseForm.css';
import React , {useState} from 'react';
const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    // const [userInput, setUserInput]= useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })
    const statusChange = ()=>{
        props.changeHandler();
    }
    const titleHandler = (e)=>{
        // setUserInput({
        //     ...userInput,
        //     title:e.target.value

        // });
        // setUserInput((prevState)=>{
        //     return {...prevState,title:e.target.value}
        // })
        setTitle(e.target.value);
        
    };
    const amountHandler = (e)=>{
        setAmount(e.target.value);
    //    setUserInput({
    //         ...userInput,
    //         amount:e.target.value
    //     }) 
    // setUserInput((prevState)=>{
    //     return{
    //         ...prevState,
    //         amount:e.target.value
    //     }
    // })

    };
    const dateHandler = (e)=>{
        setDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     date:e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         date:e.target.value
        //     }
        // })

    };
    const submitHandler = (e)=>{
        e.preventDefault();
        const expenseData = {
            title:title,
            amount:+amount,
            date:new Date(date)
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        props.changeHandler();
        setTitle('');
        setAmount('');
        setDate('');
    }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text"  onChange={titleHandler} value={title}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountHandler} value={amount}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-30" onChange={dateHandler} value={date}/>
        </div>
       
      </div>
      <div className='new-expense__actions'>
    <button type='button' onClick={statusChange}>Cancel</button>      
    <button type='submit'>Add Expense</button>

</div>
    </form>
  );
};
export default ExpenseForm;
