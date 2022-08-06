import {useContext} from 'react';
import BJContext from '../bj-context/BJContext';

const HiLo = () => {
   const {bJ} = useContext(BJContext)

   
   return(
      <div>
         <h1>
            HELLO FROM HiLO.JS
         </h1>
      </div>
   )
}

export default HiLo;