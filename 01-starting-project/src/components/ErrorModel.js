import classes from "./ErrorModel.module.css";
import Button from "./UI/Button/Button.js";

const Errors = (props) => {
  return (
      <div>
          <div className={classes.backdrop}></div>

      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
             <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
            <Button onClick = {props.reset}>Okay</Button>

        </div>
      </div>
      </div>
    
    
  );
};

export default Errors;
