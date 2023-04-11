import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

const HomePage = () =>{
    return(
      <>
        <div className="hero-left">
          <h1>Welcome to My Wonderful Kitchen</h1>
          <p>This is the place where you can find options of food you'd dare to try. 
            Also, you'll be surprised if they turn out to be tasty.</p>
          <button><a href="./categories">Check it Out</a></button>
        </div>
        <div className="hero-right">

        </div>
      </>
    );
}

export default HomePage;
