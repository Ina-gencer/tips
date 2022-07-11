import  { useState } from "react";
import './App.css';
import question from "./1.gif";
function App() {
  const [tips, setTips] = useState("");

  const fetchTips = async () => {
  const response = await fetch(`http://www.boredapi.com/api/activity/`);
   const data = await response.json();
   console.log(data.activity)
   setTips(data.activity);
  };

  return (
    <div className="App">

<div className="App-container">
 <h1>Welcome to our fun app</h1>
</div>
<div className="App-container">
       <h5>Click on the button and find out what advice you got</h5>
     </div>
<div className="App-container">
      <button onClick={fetchTips}>New Tip</button>
      </div>
    <div className="App-container advice">
      <p> {tips} </p>
       <img src={question} alt="smth move" width="50px" /> 
    </div>
    </div>
  );
}

export default App;
