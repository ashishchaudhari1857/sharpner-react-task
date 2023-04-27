import { useState } from "react";
import "./index.css";
import "./App.css";
// import x  from './components/Expenseitem'
import Expenseitem from "./components/Expenseitem";
import Userinput from "./components/Userinput";

function App() {
  const [count, setCount] = useState(0);
  // const obj = {
  //   name: "ashish",
  //   age: 13
  // };
  const User = [
    { name: "ashis", amount: "20" },
    { name: "rakesh", amount: "120" },
    { name: "brother", amount: "200" },
    { name: "kgf", amount: "500" }
  ];

  return (
    <>
      {User.map((item, i) => {
        return (
          <>
            <Expenseitem data={item} />
            {/* <h1>{item.name}</h1> */}
          </>
        );
      })}

    
      {/* <Expenseitem info={obj} /> */}
      <Userinput />
    </>
  );
}

export default App;
