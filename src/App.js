import React from 'react';
import A from './components/A'

function App() {
  const obj = {
    a: 1,
    b: 2
  }
  return (
    <div className="App">
      {null}
      {undefined}
      {false}
      {/* obj */}
      {obj.a}
      <A a={1} b={3}/>
      <input type="text" name="" id="" value={666} readOnly/>
    </div>
  );
}

export default App;
