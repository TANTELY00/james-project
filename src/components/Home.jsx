// Home.js
import React from 'react';
import '../css/Home.css';
import sampleImage from "../image/2.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="chris">
            Location des voitures
        </h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          Cras venenatis euismod malesuada. Etiam consequat urna at orci dignissim, a blandit nisl consequat. 
          Nulla facilisi. Curabitur ac risus at odio cursus dignissim.
        </p>
      </div>
      <div className="home-image">
           <img src={sampleImage} alt="Sample"/>
      </div>
    </div>
  );
}

export default Home;
