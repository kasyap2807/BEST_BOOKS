import React from 'react';
import '../Styles/Sell.css'; // Import CSS file for styling

const Sell = () => {
  return (
    <div className="partner-section">
      <div className="partner">
        <h2>Be a Partner</h2>
        <p className='spacer'>
          Conatct us for being a partner and start your own book store
        </p>
        <button className="partner-button">Learn More</button>
      </div>

      <div className="sell-together">
        <h2>Sell Together</h2>
        <p className='spacer'>
          Contact us for sell your books in our website
        </p>
        <button className="sell-together-button">Start Selling</button>
      </div>
    </div>
  );
};

export default Sell;
