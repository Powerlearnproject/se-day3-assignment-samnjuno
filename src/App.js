import { useState } from "react";


function App() {
  //javascript logic
  //create a state
  const [message, setMessage] = useState('Hello World');

  const handleClick = () => {
    setMessage('Clicked');
  };

 

//render jsx(html and css)
return(
  <div>
    <h1>{message}</h1>
    <button onClick={handleClick}>Press Me</button>
  </div>
);

}

export default App;
