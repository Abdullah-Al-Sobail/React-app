/* eslint-disable react/prop-types */
import React from 'react';

const Products = (products) => {
  const {id,title,price,description,image,rating}=products;
  console.log(products);
  return (
      <article className="product">
      <img src="" alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>{price}</p>
        <p>{rating.rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
  export default Products;