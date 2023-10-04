import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemPage() {
    const[product, setProduct] = useState([]);
    let { id } = useParams();
    useEffect(
      () => {
        // Retrieve data
        const fetchData = async () => {
          const response = await fetch('https://fakestoreapi.com/products/' + id);
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
    )
}

export default ItemPage;