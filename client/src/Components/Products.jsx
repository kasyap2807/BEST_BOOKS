import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import '../Styles/styles.css'; // Import CSS file for styling
import data from '../Asserts/kidsdata.json';
import noimg from '../Asserts/noimg.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { toast } from 'react-toastify';

import data2 from '../Asserts/data.json';
import data3 from '../Asserts/stud.json';

import axios from 'axios';

const Book = ({ book ,dataa}) => {
  const authors = book.author || []; // Set authors to an empty array if it's undefined
  const navigate = useNavigate();
  const kids = () =>{
    // console.log("i am her")
      navigate(`details/${book.id}`
            , { state:
              dataa
            }
            );
            }
  return (
    <div className="book-card">
      <img src={book.image === 'noimg' ? noimg : book.image} alt={book.image} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <h5>Authors: {book.author || authors.join(', ')}</h5> {/* Use authors variable instead of book.authors directly */}
        <h4>price : {book.price}</h4><br/>
        <a className="add-to-cart" onClick={kids}>Show Details</a>
      </div>
    </div>
  );
};

const BookList = ({ books , dataa}) => {
  const [searchTerm, setSearchTerm] = useState('');
//   console.log(dataa)
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {filteredBooks.map((book, index) => (
        <Book key={index} book={book} dataa={dataa}/>
      ))}
    </div>
  );
};

const ProductDetails = ({ books }) => {

  const { id } = useParams();

  const [booksdat, setBooksdat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [inputstra, setinputstar] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const dataa = location.state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put('http://localhost:8080/getdata', {
          id: id
        });
        setBooksdat(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const book = books.find((book) => book.id == id);
  const rating = booksdat.no_stars / booksdat.no_ratings;
  const stars = (booksdat.no_stars / booksdat.no_ratings);
//   console.log(booksdat.no_stars,booksdat.no_ratings)
  const starArray = [];
  for (let i = 0; i < stars; i++) {
      starArray.push('★'); // Add a star symbol
  }
  const commentsArray = JSON.parse(booksdat.comments);

  if (!book) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = async() => {
    try {
      let putdata = {
        id: dataa.uerid
      };
      let updatedCart = []
      let response = await axios.put('http://localhost:8080/getcart', putdata);
      if(response.data==""){
        // console.log(response.data.length+" "+response.data)
        updatedCart = [id];
        // console.log(updatedCart)
      }
      else{
        // console.log(typeof(response.data))
        const cartItems = JSON.parse(response.data.replace(/'/g, '"')).map(item => parseInt(item)); // Convert string array to integer array
        updatedCart = [...cartItems, id];
        // console.log(updatedCart)
      }
      const stringArray = updatedCart.map(num => "'" + num.toString() + "'"); // Enclose each number in single quotes
      const stringRepresentation = '[' + stringArray.join(', ') + ']'; // Join the string array with commas and add brackets
      putdata = {
        "id" : dataa.uerid,
        "cart":stringRepresentation
      }
    try {
      response = await axios.put('http://localhost:8080/setcart', putdata);
    //   console.log('Data sent successfully:', response.data);
      toast.success("added to cart successfully!!")
    } catch (error) {
      console.error('Error sending data:', error);
    }
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const commentupdate = async () =>{
    commentsArray.push(inputValue)
    const response = await axios.put('http://localhost:8080/updatecomment', {
          id: id,
          comment : JSON.stringify(commentsArray)
    });
    window.location.reload();
  }

  const ratingupdate = async () =>{
    const response = await axios.put('http://localhost:8080/updaterating', {
          id: id,
          no_stars : parseInt(booksdat.no_stars) + parseInt(inputstra),
          no_ratings : parseInt(booksdat.no_ratings) + 1  
    });
    window.location.reload();
  }

  const login = () =>{
    navigate('/login')
  }
  
  return (
    <div className="product-details">
      <div className="product-info">
      <img src={book.image === 'noimg' ? noimg : book.image}  alt={noimg} />
        <div>
          <h2>{book.title}</h2>
          <p>Authors: {book.author}</p>
          <p>Description: {book.description || 'No description available'}</p>
          <h4>price : {book.price}</h4>
          <h3>stock : {booksdat.quntity}</h3>
          <h3>published date : {book.publishedDate}</h3>
          <h3>Rating: {starArray.join('')}</h3><br/>
          {(Object.keys(dataa).length > 1)?(
            <>
          <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button><br/><br/>
          </>
          ):(
            <>
            <button onClick={login} className="add-to-cart">login to cart now</button>
            </>
          )}
          <h2>Comments :</h2>
          {commentsArray.map((comment, index) => (
          <p key={index}>userName :bb user comment : {comment}</p>
          ))}
          {(Object.keys(dataa).length > 1)?(
           <>
          <label htmlFor="comment">Give your Comment : </label>
          <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/><br/><br/>
          <button className="add-to-cart" onClick={commentupdate}>Submit comment</button>
          <br/><br/>
          <label htmlFor="stars">Give your rating: </label><br/>
          <fieldset className="Stars">
              <input type="radio" id="star5" name="rating" value="5" onChange={(event) => setinputstar(event.target.value)}/>
              <label className="full" htmlFor="star5" title="5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" onChange={(event) => setinputstar(event.target.value)}/>
              <label className="full" htmlFor="star4" title="4 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" onChange={(event) => setinputstar(event.target.value)}/>
              <label className="full" htmlFor="star3" title="3 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" onChange={(event) => setinputstar(event.target.value)}/>
              <label className="full" htmlFor="star2" title="2 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" onChange={(event) => setinputstar(event.target.value)}/>
              <label className="full" htmlFor="star1" title="1 star"></label>
          </fieldset>

          <button className="add-to-cart" onClick={ratingupdate}>Submit rating</button>
          </>):(<>
          </>)}
          <br/><br/>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    let dataa;
    dataa = location.state;
    if(location.pathname=="/novelproducts"){
        data = data2;
    }
    if(location.pathname=="/students"){
      data = data3;
    }  
    useEffect(() => {
      setBooks(data); // Set the books state with the imported data
    }, []);
  
    return (
      <>
      <Nav data = {dataa}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList books={books} dataa={dataa}/>} />
          <Route path="/details/:id" element={<ProductDetails books={books} dataa={dataa}/>} />
        </Routes>
      </div>
      </>
    );  
  };

export default Products;
