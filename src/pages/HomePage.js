import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Dislike from "./Dislike";
import Likes from "./Likes";
import Hero from '../components/Hero'
import FetchApi from "./FetchApi";
import {FaGithub} from 'react-icons/fa';
import {BsFillTelephonePlusFill} from 'react-icons/bs';
import { FaBeer } from "react-icons/fa";
import {Gi3DGlasses, GiAbstract040} from 'react-icons/gi';



function HomePage(props) {
  return (
     <div className="container border">
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <Hero />

    <SearchBar />
    <div>
       <Likes />
       <Dislike />
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
       <FetchApi />
       
       
    </div>
     </div>
  );
}

export default HomePage;