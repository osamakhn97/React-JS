// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/newExpanses/NewExpense.js';
  const DUMMY =  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {

  const [newExp,setExp] = useState(DUMMY);
  

  const getExpenseHandler = (expense)=>{
    // const newExpense = expense;
    console.log(expense)
    setExp((prevState)=>{
      
      
      return [expense, ...prevState]
    })
    console.log(newExp)
    
    // console.log(newExpense);
  }
  return (
    <div /* className="App"*/>

      <NewExpense getExpense = {getExpenseHandler}></NewExpense>
     
      <Expenses items = {newExp}/>



    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React , my Name is Osama Khan.
        </a>
      </header> */}
    </div>
  );
}

export default App;
