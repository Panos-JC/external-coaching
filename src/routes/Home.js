import ProductCard from "../components/ProductCard";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import withWidth from "../withWidth";

function Home({ width }) {
  const [products, setProducts] = useState([]);

  console.log("WIDTH FROM HOME:", width);

  useEffect(() => {
    // Retrieve products data
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            id={product.id}
            title={product.title}
            imageURL={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default withWidth(Home);
