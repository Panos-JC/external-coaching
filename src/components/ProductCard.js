function ProductCard({title, price, imageURL}) {;

    return(
        <div>
            <div className="card">
                <div className="photo-container">
                    <img className="photo" src={imageURL} alt="Product" />
                </div>

                <div className="productInfo">
                    <p className="title">{title}</p>
                    <p className="price">{price}$</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;