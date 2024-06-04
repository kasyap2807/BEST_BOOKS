import React from 'react'
import '../Styles/navbar.css'; // Import the CSS file
import logo from '../Asserts/logo.jpg';
import { useNavigate } from 'react-router-dom';
import user from '../Asserts/user.jpg'
import profile from './UserProfile';

function Nav(props) {
    const data = props.data;
    const navigate = useNavigate();
    const logout = () =>{
      navigate('/'
            , { state:{
            }}
            );
    }

    const home = () =>{
      navigate('/'
            , { state:
              data
            }
            );
    }

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

    const cart = () =>{
      navigate('/cart'
            , { state:
              data
            }
            );
    }

    const profile= () =>{
      navigate('/profile'
            , { state:
              data
            }
            );
    }

    return (
        <nav className="navbar">
          <div className="container1">
            <a onClick={home} className="logo">
              <img src={logo} alt="Logo" />
              <p>Best Books</p>
            </a>
            <ul className="nav-links">
              <li onClick={home}><a href="">Home</a></li>
              <li onClick={kids}><a href="">Kids Zone</a></li>
              <li onClick={novelproducts}><a href="">Books</a></li>
              <li onClick={students}><a href="">Students Corner</a></li>
              {(Object.keys(data).length > 1)?(
                <>
              <li onClick={cart}><a>🛒cart</a></li>
              <li className="dropdown">
                 <img src={user} alt="Profile Image" className="profile-image"/>
                 <div className="dropdown-content">
                 <a onClick={profile}>Profile</a>
                 <a href="#">My Orders</a>
                </div>
              </li>
              <li onClick={logout}><a>logout</a></li>
              </>
              ):
              (
                <li><a href="/login">login/signup</a></li>
              )
              }
            </ul>
          </div>
        </nav>
      );
}

export default Nav