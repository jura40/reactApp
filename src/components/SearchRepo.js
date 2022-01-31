import {useState , useEffect} from "react";
import axios from 'axios';
import React from "react";
import Results from "./Results";
import Container from "react-bootstrap/esm/Container";

const SearchRepo = () => {
    const [searchInput, setSearchInput] = useState('Jura40');
    const [reposs, setReposs] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    };

    const handleClick = async () => {
    

        
            const result = await axios(`https://api.github.com/users/Jura40/repos`);

        setReposs(result);

        
        
    };
    console.log(reposs);
    useEffect(() => {
        handleClick();
        
    }, [] );

    return (
        <Container>
    <div style = {{ padding : "20px" }} >
     <input
      type = "text"
       placeholder="söka"
        value ={searchInput} 
        onChange={handleChange}
        />
     <button onClick= {handleClick}> search</button>
     </div>
      <Results reposs= {reposs}/>
      </ Container>
    );
};
export default SearchRepo;