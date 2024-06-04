import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data1 from '../Asserts/kidsdata.json';
import data2 from '../Asserts/stud.json';
import data3 from '../Asserts/data.json';
import '../Styles/cart.css'; // Import CSS file for styling
import Nav from './Nav';
import { useLocation , useNavigate} from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const dataa = location.state;

  useEffect(() => {
    // Function to fetch cart data
    const fetchCart = async () => {
      const putdata = {
        id: dataa.uerid
      };
      try {
        const response = await axios.put('http://localhost:8080/getcart', putdata);
        const cartItems = JSON.parse(response.data.replace(/'/g, '"')).map(item => parseInt(item)); // Convert string array to integer array
        setCart(cartItems);
        fetchCartData(cartItems);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  

  // Function to fetch data for each item in the cart
  const fetchCartData = (cartItems) => {
    const uniqueItems = [...new Set(cartItems)]; // Get unique item IDs from cartItems array
    let itemsData = [];
  
    // Loop through unique item IDs
    for (let itemId of uniqueItems) {
      let data;
      let quantity = cartItems.filter(id => id === itemId).length; // Calculate quantity of the item
  
      // Determine which data file to search based on itemId
      if (itemId >= 1 && itemId <= 50) {
        data = data1.find(item => item.id === itemId);
      } else if (itemId >= 51 && itemId <= 119) {
        data = data2.find(item => item.id === itemId);
      } else {
        data = data3.find(item => item.id === itemId);
      }
  
      // console.log(data)
      // If data found, add it to itemsData with quantity
      if (data) {
        const itemWithQuantity = { ...data, quantity }; // Add quantity property to the item
        itemsData.push(itemWithQuantity);
      }
    }
  
    setItems(itemsData);
    calculateTotalCost(itemsData);
  };
  
  // Function to calculate total cost
  const calculateTotalCost = (itemsData) => {
    let total = itemsData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalCost(total + 20 + 50); // Adding platform cost and delivery charge
  };

   // Function to handle quantity increment
  const incrementQuantity = (itemId) => {
      const itemIndex = cart.findIndex(id => id === itemId);
      const updatedCart = [...cart, itemId];
      setCart(updatedCart);
      sendDataToBackend(updatedCart);
      fetchCartData(updatedCart);
  };
  
  // Function to handle quantity decrement
   const decrementQuantity = (itemId) => {
    const itemIndex = cart.findIndex(id => id === itemId);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      const currentItemQuantity = updatedCart.filter(id => id === itemId).length;
      if (currentItemQuantity > 1) {
        const indexOfItemToRemove = updatedCart.lastIndexOf(itemId);
        updatedCart.splice(indexOfItemToRemove, 1); // Remove last occurrence of the item from the cart
      } else {
        updatedCart.splice(itemIndex, 1); // Remove the item from the cart
      }
      setCart(updatedCart);
      sendDataToBackend(updatedCart);
      fetchCartData(updatedCart);
    }
  };

  const sendDataToBackend = async (cart) => {
      const stringArray = cart.map(num => "'" + num.toString() + "'"); // Enclose each number in single quotes
      const stringRepresentation = '[' + stringArray.join(', ') + ']'; // Join the string array with commas and add brackets
      const putdata = {
        "id" : dataa.uerid,
        "cart":stringRepresentation
      }
    try {
      const response = await axios.put('http://localhost:8080/setcart', putdata);
      // console.log('Data sent successfully:', response.data);
      // Optionally, you can handle any response from the backend here
    } catch (error) {
      console.error('Error sending data:', error);
      // Optionally, you can handle errors here
    }
  };

  // Function to proceed to payment
  const proceedToPayment = () => {
    navigate('/Payment'
            , { state:{
                dataa : dataa,
                cost : totalCost
            }
            
            }
            );
  };

  const gotohome = () =>{
    navigate('/'
    , { state:dataa
    }
    );
  }

  return (
    <>
    <Nav data = {dataa}/>
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="go-to-home-btn" onClick={gotohome}>Go to Home</button>
        </div>
      ) : (
        <>
          <div className="items-container">
            {items.map(item => (
              <div key={item.id} className="item">
                <p className="item-title">{item.title}</p>
                <p className="item-cost">Cost: {item.price}</p>
                <div className="quantity">
                  <button className="quantity-btn" onClick={() => decrementQuantity(item.id)}>-</button>
                  <span className="quantity-value">{cart.filter(id => id === item.id).length}</span>
                  <button className="quantity-btn" onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
            <br/>
            <p className="total">Delivary charges : 50</p>
            <p className="total">platform charges : 20</p>
          <div className="total-container">
            <p className="total">Total Cost: {totalCost}</p>
            <button className="checkout-btn" onClick={proceedToPayment}>Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
    </>
  );

};

export default CartPage;
