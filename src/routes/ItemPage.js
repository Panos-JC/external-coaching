
import withWidth from "../withWidth";
import { useState, useEffect } from "react";

function ItemPage({ width, route }) {
  // console.log("WIDTH FROM ITEM PAGE:", width);
  // console.log(route)

  // Get id from route
  const array = route.pathname.split('/');
  const itemId = array[2]; // Get the characters after the slash

  // Fetch data for specific item
  const[product, setProduct] = useState([]);
    useEffect(
      () => {
        // Retrieve data
        const fetchData = async () => {
          const response = await fetch('https://fakestoreapi.com/products/' + itemId);
          const product = await response.json();
          setProduct(product);
          console.log(product);
        };
  
        fetchData();
      },
      []
    );

  return (
     <div className="outer">
            <h1>Item id: {itemId}</h1>
            <p>Current width: {width} -- 
            {width < 500 ? " Mobile" : " Desktop"}</p>
            <p>Product route: {route.pathname}</p>
            <div className="card1">
                    <div className="photo-container">
                        <img className="photo" src={product.image} alt="Product" />
                    </div>

                    <div className="productInfo">
                        <p className="title">{product.title}</p>
                        <p className="price">{product.price}$</p>
                    </div>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
            </div>
        </div>
  );
}

export default withWidth(ItemPage);
