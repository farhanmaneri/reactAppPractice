import { useState } from "react";
import "./App.css";
import AuthContext from "./context/AuthContext";
import AuthHandler from "./components/authHandler/AuthHandler";
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const onLogin = () => {
    setisAuthenticated(true);
  };
  //   const bool = true;

  //   const [items, setItems] = useState(["item 1", "item 2"]);

  //   const onAddHandler = (data) => {
  //     // setItems([...items, data])
  //     setItems((prevState)=>{
  //       return [...prevState, data];
  //     })
  // console.log(data)
  //   }

  return (
    // <div className={bool ? 'App' : " "}>
    // <AddItem onAdd={onAddHandler}/>
    // <List arr={items}/>
    // </div>
    <>
      <div className="App">
        <AuthContext.Provider
          value={{
            isLogedIn: isAuthenticated,
          }}
        >
          <AuthHandler onLogin={onLogin} />
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;
