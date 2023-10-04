import { Link } from "react-router-dom";

function ProductCard({id, title, price, imageURL}) {;

    return(
        <div>
            <Link to={`/item/${id}`}>
                <div className="card">
                    <div className="photo-container">
                        <img className="photo" src={imageURL} alt="Product" />
                    </div>

                    <div className="productInfo">
                        <p className="title">{title}</p>
                        <p className="price">{price}$</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;