import React, {useContext} from 'react';
import { Context } from './Context';

function Componet1() {
  
    const theme = useContext(Context);
   
    return (
      <button style={{ background: theme.cor }}>Teste</button>
    );
  }
  
  export default Componet1;