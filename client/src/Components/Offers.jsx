import React, { useState, useEffect } from 'react'
import novel from '../Asserts/novel.png';
import Kids from '../Asserts/Kids.png';
import Student from '../Asserts/Students.png';
import Title from '../Asserts/Title2.jpg';
import '../Styles/offer.css'

function Offers() {
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextOffer();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentOfferIndex]);

    const showOffer = (index) => {
        const offers = document.querySelectorAll('.offer-image');
        if (index < 0) {
            setCurrentOfferIndex(offers.length - 1);
        } else if (index >= offers.length) {
            setCurrentOfferIndex(0);
        } else {
            setCurrentOfferIndex(index);
        }
    };

    const nextOffer = () => {
        showOffer(currentOfferIndex + 1);
    };

    const prevOffer = () => {
        showOffer(currentOfferIndex - 1);
    };

    return (
        <div className='body'>
            <div className="offers">
                <img className="offer-image" src={Title} alt="Offer 1" style={{ display: currentOfferIndex === 0 ? 'block' : 'none' }} />  
                <img className="offer-image" src={novel} alt="Offer 1" style={{ display: currentOfferIndex === 1 ? 'block' : 'none' }} />
                <img className="offer-image" src={Kids} alt="Offer 2" style={{ display: currentOfferIndex === 2 ? 'block' : 'none' }} />
                <img className="offer-image" src={Student} alt="Offer 2" style={{ display: currentOfferIndex === 3 ? 'block' : 'none' }} />
                <span className="arrow left" onClick={prevOffer}>&#10094;</span>
                <span className="arrow right" onClick={nextOffer}>&#10095;</span>
            </div>
        </div>
    );
}

export default Offers