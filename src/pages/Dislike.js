import { useState } from 'react';


const Dislike = () => {
    const [counter, setCounter] = useState(0);
    const saldo = () => {
        setCounter(counter + 1);
    
        
    };
    return ( 
        <div>
            {counter} <br />
            <button onClick={saldo} >Dislike</button>
        </div>
     );
};
 
export default Dislike;