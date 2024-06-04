import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Nav from './Nav';

const LoginSignupPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupPhoneNumber, setSignupPhoneNumber] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const postData = {
      email:loginEmail,
      password:loginPassword
    }
    axios.put('http://localhost:8080/login', postData)
    .then(response => {
      if(Object.keys(response.data).length >= 1){
        // console.log('Response:', response.data);
        toast.success("Login Success!!")
        navigate('/'
            , { state:
            (response.data)
            }
            );
        // console.log(Object.keys(response.data).length)
      }
      else{
        toast.error("Login faild check user and password!!")
      }
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  const handleSignup = () => {
    const postData = {
      name:signupFirstName,
      lastname:signupLastName,
      email:signupEmail,
      phonenumber:signupPhoneNumber,
      password:signupPassword
    }
    if(signupPassword===signupPasswordConfirm){
      axios.post('http://localhost:8080/signup', postData)
    .then(response => {
      // Handle success
      // console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
    }
    else{
      toast.warning("password doesnt match")
    }
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <><Nav data = {{}}/>
    <div className="login">
      {showLogin ? (
        <div className="mainlog1" style={{ width: "400px" }}>
          <div className="card-body1">
            <h2 className="card-title1">Login</h2>
            <form>
              <div className="form-group1">
                <label>Email address</label>
                <input type="email" className="form-control1" placeholder="Enter email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </div>
              <div className="form-group1">
                <label>Password</label>
                <input type="password" className="form-control1" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </div>
              <button type="button" className="btn1" onClick={handleLogin}>Login</button>
            </form>
            <div className="text-center mt-3">
              <p>Don't have an account? <span className="text-primary" onClick={() => setShowLogin(false)}>Sign up</span></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainlog1" style={{ width: "500px" }}>
          <div className="card-body1">
            <h2 className="card-title1">Signup</h2>
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-group1">
                    <label>First Name</label>
                    <input type="text" className="form-control1" placeholder="First Name" value={signupFirstName} onChange={(e) => setSignupFirstName(e.target.value)} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group1">
                    <label>Last Name</label>
                    <input type="text" className="form-control1" placeholder="Last Name" value={signupLastName} onChange={(e) => setSignupLastName(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="form-group1">
                <label>Phone Number</label>
                <input type="text" className="form-control1" placeholder="Phone Number" value={signupPhoneNumber} onChange={(e) => setSignupPhoneNumber(e.target.value)} />
              </div>
              <div className="form-group1">
                <label>Email address</label>
                <input type="email" className="form-control1" placeholder="Enter email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
              </div>
              <div className="form-group1">
                <label>Password</label>
                <input type="password" className="form-control1" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
              </div>
              <div className="form-group1">
                <label>Confirm Password</label>
                <input type="password" className="form-control1" placeholder="Confirm Password" value={signupPasswordConfirm} onChange={(e) => setSignupPasswordConfirm(e.target.value)} />
              </div>
              <button type="button" className="btn1" onClick={handleSignup}>Signup</button>
            </form>
            <div className="text-center mt-3">
              <p>Already have an account? <span className="text-primary" onClick={handleShowLogin}>Login</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default LoginSignupPage;
