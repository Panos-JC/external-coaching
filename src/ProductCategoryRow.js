import React from "react";

function ProductCategoryRow ({category}) {
    return <>
        <table>
            <tr className='ProductCategoryRow'>{category}</tr>
        </table>
    </>
}

export default ProductCategoryRow;