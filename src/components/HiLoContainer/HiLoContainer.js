import BJState from '../bj-context/BJState'
import HiLo from './HiLo';

const HiLoContainer = () => {
   return (
      <div>
          <h1>
            HELLO FROM HiLoContainer.JS
         </h1>
         <BJState>
            <HiLo/>
         </BJState>
      </div>
   );
}

export default HiLoContainer;