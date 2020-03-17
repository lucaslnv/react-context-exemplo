import React, {useState} from 'react';
import { ContextProvider } from './Context';
import Componet1 from './Componet1';
import Componet2 from './Componet2';


function App() {
  
  const [obj, setObj] = useState( {} );
  
  return (
    <ContextProvider value={obj}>
      <div className="App">
          Hello World
      </div>
      <Componet1 />
      <br />
      <Componet2 setObj={setObj}/>
    </ContextProvider>
  );
}

export default App;
