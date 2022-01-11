import React from "react";
import './GetGoals.css';

const getGoals = (props)=>{
    const remove = ()=>{
        props.rem(props.id);
    }
    
    return(
        <div className="UIG" onClick={remove}>{props.desc}</div>
    )

}
export default getGoals;