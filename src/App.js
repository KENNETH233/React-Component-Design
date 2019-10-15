import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="item1">
          <p className="info">Jan. 30, 2018</p>
        </div>

        <div className="item2">
        <p className="title">The shift</p>
        <h3>Kodak's Dubious Blockchain Gamble</h3>
        <p className="para">
        What's a 130-years-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.
        </p>
        <p className="info">
        By KEVIN ROOSE
        </p>

        </div>

        <div className="item3">
        <img src="https://static01.nyt.com/images/2019/10/13/multimedia/13xp-mall2/13xp-mall2-mediumThreeByTwo440.jpg?quality=100&auto=webp" alt="news"/>
        </div>
      </div>

      <div className="container">
        <div className="item1">
          <p className="info">Jan. 30, 2018</p>
        </div>

        <div className="item2">
          <h3>Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel.</h3>

          <p className="para">
            Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday
          </p>
          
          <p className="info">By CHRIS HORTON
          </p>
  
        </div>

        <div className="item3">
        <img src="https://static01.nyt.com/images/2019/10/13/multimedia/13xp-bidenchina/13xp-bidenchina-mediumThreeByTwo440.jpg?quality=100&auto=webp" alt="wow"/>
        </div>
      </div>

      <div className="container">
        <div className="item1">
          <p className="info"> Jan. 29, 2018</p>
        </div>

        <div className="item2">
          <h3>New Jersey Embraces an Idea it Once Rejected: Make Ullities Pay to Emit Carbon</h3>

          <p className="para">
              Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy
          </p>

          <p className="info"> By BRAD PLUMER</p>
        </div>

        <div className="item3">
          <img src="https://static01.nyt.com/images/2019/10/13/world/13typhoon-hagibis/12typhoon-hagibis-watch1-mediumThreeByTwo440.jpg?quality=100&auto=webp" alt="trash"/>
        </div>
      </div>

    </div>
  );
}

export default App;
