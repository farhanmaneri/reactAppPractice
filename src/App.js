import { useState } from "react";
import List from "./components/list/List";
import './App.css'
import AddItem from './components/additem/Additem'
function App() {
  const bool = true;
  
  const [items, setItems] = useState(["item 1", "item 2"]);

  const onAddHandler = (data) => {
    // setItems([...items, data])
    setItems((prevState)=>{
      return [...prevState, data];
    })
console.log(data)
  }

  return (
    <div className={bool ? 'App' : " "}>
    <AddItem onAdd={onAddHandler}/>
    <List arr={items}/>
    </div>
  );
}

export default App;
