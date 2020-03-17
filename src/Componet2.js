import React, {useContext} from 'react';
import { Context } from './Context';

function Componet1( props ) {
  
    const theme = useContext(Context);
    
    function alterarVermelho (){
        props.setObj({cor: 'red'});
    }

    function alterarAzul (){
        props.setObj({cor: 'blue'});
    }

    function alterarAmarelo (){
        props.setObj({cor: 'yellow'});
    }

    return (
    <>
      <button style={{ background: theme.cor }} onClick={alterarVermelho}>Alterar para vermelho</button>
      <button style={{ background: theme.cor }} onClick={alterarAzul}>Alterar para azul</button>
      <button style={{ background: theme.cor }} onClick={alterarAmarelo}>Alterar para amarelo</button>
    </>
    );
  }
  
  export default Componet1;