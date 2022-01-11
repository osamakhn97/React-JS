// import React ,{useState} from 'react';
import './GoalForm.css';
const GoalForm = (props)=>{
    
    
    let desc ;
    const dataInputHandler = (event)=>{
        desc = event.target.value;
    
    }
    const submit= (e)=>{
        e.preventDefault();
        const goal = {
            id:Math.random(),
            desc:desc
        }   

        props.getGoals(goal);
    }
    




    return (
        <div className='UI'>
            <form onSubmit={submit}>
                <div className='form-control'>
                    <label >Description</label>
                    <input type="text" onChange={dataInputHandler}/>
                </div>
                <div className='form-control'>

                    <button type='submit'>Add</button>

                </div>
            </form>
        </div>
    )
}

export default GoalForm