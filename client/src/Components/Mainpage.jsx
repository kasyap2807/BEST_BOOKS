import React from 'react'
import Divis from './Divis'
import Offers from './Offers'
import Sell from './Sell'
import {useLocation,Link} from 'react-router-dom';
import Nav from './Nav';
function Mainpage() {
  const location = useLocation();
  let dataa = {}
  if(location.state){
    dataa = location.state;
    // console.log((dataa))
  }
  return (
    <div>
        <Nav data = {dataa}/>
        <Offers/>
        <Divis data = {dataa}/>
        <Sell data = {dataa}/>
    </div>
  )
}

export default Mainpage