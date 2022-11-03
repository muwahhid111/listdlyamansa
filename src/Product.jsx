import React from "react";
const Product = ({ name, price, left, image} ) => {
  return <td className="td">{name} {price} {left} <img src={image} alt="" /></td>;
};
export default Product;
