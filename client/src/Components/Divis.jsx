import React from 'react'
import '../Styles/Divis.css'; // Import the CSS file

// images
import Student from '../Asserts/Studentsdiv.jpeg';
import Kids from '../Asserts/kidsdiv.jpg';
import novel from '../Asserts/noveldiv.jpg';

// navigate
import { useNavigate } from 'react-router-dom';

function Divis(props) {
    const showAllBoxes = () => {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.classList.remove('hidden');
        });
    };

    const navigate = useNavigate();
    const data = props.data;

    const kids = () =>{
        navigate('/kids'
              , { state:
                data
              }
              );
      }
  
      const novelproducts = () =>{
        navigate('/novelproducts'
              , { state:
                data
              }
              );
      }
  
      const students = () =>{
        navigate('/students'
              , { state:
                data
              }
              );
      }

    return (
        <div className="container">
            <div className="box" id="box1">
                <div className="box-content">
                    <p>Lets Read</p>
                    <a onClick={novelproducts}><button className="button" onClick={showAllBoxes}>Click here</button></a>
                </div>
            </div>
            <div className="box" id="box2">
                <div className="box-content">
                    <p>For Kids</p>
                    <a onClick={kids}><button className="button" onClick={showAllBoxes}>Click here</button></a>
                </div>
            </div>
            <div className="box" id="box3">
                <div className="box-content">
                    <p>For Your Life</p>
                    <a onClick={students}><button className="button" onClick={showAllBoxes}>Click here</button></a>
                </div>
            </div>
        </div>
    );
}

export default Divis