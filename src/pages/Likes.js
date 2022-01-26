import { useState } from 'react';
import {FaGithub} from 'react-icons/fa';
import {BsFillTelephonePlusFill} from 'react-icons/bs';
import { FaBeer } from "react-icons/fa";
import {Gi3DGlasses, GiAbstract040} from 'react-icons/gi';


const Likes = () => {
    const [counter, setCounter] = useState(0);
    const saldo = () => {
        setCounter(counter + 1);
    
        
    };
    return ( 
        <div>
            {counter} <br />
            <button onClick={saldo} >Likes  </button> 
            
            <br />
            <div>
            <FaGithub />
            <h5>min git hub konto</h5> 
            </div>
            <br />
            <FaBeer />
            <br />
            <BsFillTelephonePlusFill />
            <br />
            <Gi3DGlasses />
            <br />
            <GiAbstract040 />
        </div>
     );
};
 
export default Likes;
