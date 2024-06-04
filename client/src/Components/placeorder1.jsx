// FormPage.jsx
import React, { useState } from 'react';
import { useLocation , useNavigate} from 'react-router-dom';
import '../Styles/formstyle.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Nav from './Nav';

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state;
  // console.log(data);
  const [formData, setFormData] = useState({
    name: data.dataa.name,
    email: data.dataa.email,
    phone: data.dataa.phonenumber,
    address1: data.dataa.address,
    pincode: data.dataa.pincode,
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
      if(formData.paymentMethod=="cashOnDelivery"){
        let postdata = {
            userid : data.dataa.uerid,
            name: data.dataa.name,
            address: formData.address1,
            pincode: formData.pincode,
            phonenumber: formData.phone,
            email: formData.email,
            cart: data.dataa.cart,
            dstatus:"dispatched",
            pstatus:"cash on delivary",
            totalcost : data.cost
          }
          let putdata = 
            JSON.parse(data.dataa.cart.replace(/'/g, '"')).map(item => parseInt(item))
          
          try {
              let Response = await axios.post('http://localhost:8080/orderplace',postdata)
              Response = await axios.put('http://localhost:8080/updatequt',putdata)
              // console.log(Response)
              // console.log(putdata)
                toast.success("orderplaced successfully")
                navigate('/'
            , { state:
              data.dataa
            }
            );
            }
          catch (error) {
            toast.warning("somthing happen try agin later")
          }
    }
    else{
        let postingdata = {
            userid : data.dataa.uerid,
            name: data.dataa.name,
            address: formData.address1,
            pincode: formData.pincode,
            phonenumber: formData.phone,
            email: formData.email,
            cart: data.dataa.cart,
            dstatus:"dispatched",
            pstatus:"cash on delivary",
            totalcost : data.cost
           }
       navigate('/Paymentgateway',{state : {
        postdata : postingdata,
        dataa : data.dataa
       }})
    }
}

  return (
    <>
    <Nav data = {data.dataa}/>
    <div className="cart-container">
      <h2 className="cart-heading">Checkout</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address Line:</label>
          <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin Code:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
        </div>
        <button className="checkout-btn" onClick={handleSubmit}>Place Order</button>
    </div>
    </>
  );
};

export default FormPage;
