import styles from './Expenseitem.module.css';
import './Expense.css';
const Expenseitem = (props) => {
   const obj={
    color:"white",
    fontSize:"20px",
    fontFamily: "Sans-Serif",
  
   };
  // console.log(props.name);
  return (
    
    <div>
      {/* inline css */}
      <h1 style={{color: "red" }}>Expense Items</h1>
      Food Rs 10 <br/>
      {/* you can object also */}
      <div style={obj} >
        Petrol Rs 10000<br/>
        </div>
         Movies Rs 200       
         <h1 style={obj}>{props.data.name} {props.data.amount}  </h1> 
         {/* this was a module.css */}
         {/* <h1 className={styles.justtrying}>{props.info.name}</h1> */}
         {/* <h1>{props.name}</h1> */}
    </div>
  );
}

export default Expenseitem