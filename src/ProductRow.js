import React from "react";

function ProductRow ({product}) {

    return <>
        <tr className={product.inStock? '' : 'notInStock'}>
            <td>{product.product}</td>
            <td>{product.price}</td>
        </tr>
    </>
}

export default ProductRow;