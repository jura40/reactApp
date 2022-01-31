import { useState } from 'react';



const Likes = () => {
    const [counter, setCounter] = useState(0);
    const saldo = () => {
        setCounter(counter + 1);
    
        
    };
    return ( 
        <div>
            {counter} <br />
            <button onClick={saldo} >Likes  </button> 
            
            
            
        </div>
     );
};
 
export default Likes;
