import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom'
const Backdrop = (props)=>{
return <div className={classes.backdrop} onClick={props.onClick}/>
}
const Overlay = (props)=>{
//     console.log(props.children)
//     return <div className={classes.modal}>
//     <div className={classes.content}>{props.chilren}</div>
// </div>
return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>

    </div>
)
}
const Modal = (props)=>{
    const newElement = document.getElementById('overlay');
    
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,newElement)}
            {ReactDOM.createPortal(<Overlay >{props.children}</Overlay>,newElement)}
            {/* <Backdrop/>
            <Overlay>{props.children}</Overlay> */}
        </Fragment>
    )
}
export default Modal