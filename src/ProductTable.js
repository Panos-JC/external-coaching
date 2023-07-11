import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable ({ categories, search, checked }) {
    return <>
         <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </table>

          {categories.map(
            (object) => {

              const filteredProducts = object.products.filter((item) => item.product.toLowerCase().indexOf(search.toLowerCase()) !== -1)

                return <>
                    <ProductCategoryRow category={object.category}/>

                    
                    <table>                
                        {filteredProducts.map(
                        (product) => {
                            if (checked) {
                                if (product.inStock) {
                                    return <>
                                        <ProductRow product={product}/>
                                    </> 
                                }
                                }
                                else {
                                    return <>
                                        <ProductRow product={product}/>
                                    </> 
                                }    
                        }
                        )}   
                    </table>
                </>
            }               
          )}
    </>
}

export default ProductTable;