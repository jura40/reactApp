
import React from "react";
import VideoArea from "../components/video";
import SearchBar from "../SearchBar/SearchBar";
import SearchRepo from "../components/SearchRepo";
import Results from "../components/Results";



function AboutPage(props) {
  return (
     <div className="container border">
        <h2>Welcome to the ABOUTpage!</h2>
        <br />
        <h1>Här kan du se mina videos från YouToube</h1>
        
        <SearchBar props = {props} />
      <VideoArea />
      <br />
      <div>
      <VideoArea />
      </div>
         
     </div>
  );
}


export default AboutPage;
