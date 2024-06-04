// PaymentPage.jsx
import React, { useState } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
// import qrCodeImage from './qr.jpg'; // Import your QR code image
import '../Styles/formstyle.css';
import noimg from '../Asserts/noimg.png';
import axios from 'axios';
import { toast } from 'react-toastify';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postdata = location.state;
  //  console.log(postdata)
  const [transactionNumber, setTransactionNumber] = useState('');

  const handlePaid = () => {
      try {
          let Response = axios.post('http://localhost:8080/orderplace',postdata)
            toast.success("orderplaced successfully")
            navigate('/'
        , { state:
            postdata.dataa
        }
        );
        }
      catch (error) {
        toast.warning("somthing jhappen try agin later")
      }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Payment</h2>
      <div className="total-container">
        <span className="total">Total Cost: rs. {postdata.postdata.totalcost}</span>
      </div>
      <div className="qr-code-container">
        <img src={noimg} alt="QR Code" className="qr-code" />
      </div>
      <div className="payment-details">
        <input
          type="text"
          placeholder="Enter Transaction Number"
          value={transactionNumber}
          onChange={(e) => setTransactionNumber(e.target.value)}
          className="transaction-input"
        />
        <button onClick={handlePaid} className="paid-btn">Paid</button>
      </div>
    </div>
  );
};

export default PaymentPage;
