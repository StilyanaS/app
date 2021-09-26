import React from "react";
import "./CartWidget.css";
import { BsFillBagFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

const CartWidget = () => {
  return (
  <Link to={`/cart`}>
  <BsFillBagFill/>
  </Link>
  )

}
export default CartWidget