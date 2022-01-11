import React from 'react';
import { useState } from 'react';
import GoalForm from './components/GoalForm.js';
import GetGoals from './components/GetGoals.js';


const App = ()=>{
  
const myGoals = [
  {id:'g1',desc:'Hello'},{id:'g2',desc:'Ali'}

];


  const [goals,setGoals] = useState(myGoals);
  const remove = (item)=>{
    const newGoals = goals.filter(e=> !(e.id === item));
    // console.log(item);
    // console.log(newGoals);
    setGoals(newGoals);
  }
  const get = (goal)=>{
    // console.log(goal)
    setGoals((prevGoal)=>{
      return [goal, ...prevGoal]
    })
  }

  // let foundGoals = <h2 style = {{'textAlign': 'center', 'color':'green'}}>Goals Found</h2>;
  let foundGoals = <div>
    {goals.map(g=>{
    return <GetGoals 
    key={g.id}
    id = {g.id}
    desc = {g.desc}
    rem = {remove}
    
    />})}


  </div>;

  if(goals.length === 0){
    foundGoals = <h2 style = {{'textAlign': 'center', 'color':'red'}}>No goals Found</h2>
    
  }

  return (
    <div>
      <GoalForm getGoals = {get}/>
      {foundGoals}


    </div>
  )



}
export default App