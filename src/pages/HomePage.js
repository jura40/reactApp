import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Dislike from "./Dislike";
import Likes from "./Likes";
import Hero from '../components/Hero'
import FetchApi from "./FetchApi";



function HomePage(props) {
  return (
     <div>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <Hero />

    <SearchBar />
    <div>
       <Likes />
       <Dislike />
       <FetchApi />
       
       
    </div>
     </div>
  );
}

export default HomePage;