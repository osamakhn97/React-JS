// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const exp =  [
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
  return (
    <div /* className="App"*/>

      <h2>Lets get started</h2>
      <p>This is also visible.</p>
      <ExpenseItem title = {exp[0].title} amount={exp[0].amount} date ={exp[0].date}></ExpenseItem>
      <ExpenseItem title = {exp[1].title} amount={exp[1].amount} date ={exp[1].date}></ExpenseItem>
      <ExpenseItem title = {exp[2].title} amount={exp[2].amount} date ={exp[2].date}></ExpenseItem>
      <ExpenseItem title = {exp[3].title} amount={exp[3].amount} date ={exp[3].date}></ExpenseItem>
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
