import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        

     <ul>
         <li>item 1</li>
         <li>item 1</li>
         <li>item 1</li>
         <li>item 1</li>
     </ul>




     
        <p>
          My value is {value}
        </p>
        <button  onClick={() => {
            setValue(value + 1)
        }}>Increase</button>
        <button  onClick={() => {
            setValue(value - 1)
        }}>Decrease</button>

    </div>


// parse the grocery item and price through (use propts)

      </header>
    </div>
  );
}

export default App;
