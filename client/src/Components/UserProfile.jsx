import React , {useState}from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
import '../Styles/formstyle.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Nav from './Nav';

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state;
//   console.log(data);
  const [formData, setFormData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phonenumber,
    address1: data.address,
    pincode: data.pincode,
    password : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    let postdata = {
          uerid : data.uerid,
          name: formData.name,
          address: formData.address1,
          pincode: formData.pincode,
          password: formData.password
        }
        try {
            let Response = await axios.post('http://localhost:8080/updateUser',postdata)
            //   console.log(Response)
              toast.success("profile updated successfully")
              navigate('/profile'
          , { state:
            data
          }
          );
          }
        catch (error) {
          toast.warning("somthing jhappen try agin later")
        }
  }

  return (
    <>
    <Nav data = {data}/>
    <div>
        <div className="cart-container">
      <h2 className="cart-heading">Profile</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input type="text" id="password" name="password" onChange={handleChange} placeholder='if password update enter password else enter present password'required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email(cant change):</label>
          <input type="email" id="email" name="email" defaultValue={formData.email} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number(cant change):</label>
          <input type="tel" id="phone" name="phone" defaultValue={formData.phone} required />
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address Line:</label>
          <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin Code:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>
        <button className="checkout-btn" onClick={handleSubmit}>Update Profile</button>
    </div>
    </div>
    </>
  )
}

export default UserProfile