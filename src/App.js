import React, { useState } from 'react';
import './App.css';


function App() {

const  [Cval, Sval] = useState("");

const getVal=(event)=>{
    Sval(Cval.concat(event.target.value))
}

const ClearVal=()=>{
  Sval("");
}


const ResultVal=()=>{
  Sval(eval(Cval).toString())
}
  return (
    <div className="container">
  
      <div className="calcy">
        <div className="heading">
          <h1>CALCULATOR</h1>
        </div>
        <input type="text" placeholder='0' id='answer'  value={Cval}/>

        <div className="digits">
          <input type="button" value="9" className='btn' onClick={getVal}/>
          <input type="button" value="8" className='btn' onClick={getVal}/>
          <input type="button" value="7" className='btn' onClick={getVal}/>
        </div>
        <div className="digits">

          <input type="button" value="6" className='btn' onClick={getVal}/>
          <input type="button" value="5" className='btn' onClick={getVal}/>
          <input type="button" value="4" className='btn' onClick={getVal}/>
        </div>
        <div className="digits">

          <input type="button" value="3" className='btn' onClick={getVal}/>
          <input type="button" value="2" className='btn' onClick={getVal}/>
          <input type="button" value="1" className='btn' onClick={getVal}/>
        </div>
        <div className="digits">

          <input type="button" value="0" className='btn' onClick={getVal}/>
          <input type="button" value="." className='btn' onClick={getVal}/>
          <input type="button" value="+" className='btn' onClick={getVal}/>
        </div>
        <div className="digits">

          <input type="button" value="-" className='btn' onClick={getVal}/>
          <input type="button" value="*" className='btn' onClick={getVal}/>
          <input type="button" value="/" className='btn' onClick={getVal}/>
          <input type="button" value="%" className='btn' onClick={getVal}/>
        </div>
        <div className="digits">

          <input type="button" value="=" className='btn' onClick={ResultVal}/>
          <input type="button" value="Clear" className='btn' onClick={ClearVal}/>
          
        </div>



      </div>
    </div>
  );


}

export default App;
