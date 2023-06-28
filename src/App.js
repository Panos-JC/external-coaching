import React, { useState } from 'react';
import './App.css';

const categories = [
    {
      category: 'Fruits',
      products: [
        {
          product: 'Apple',
          price: '1$',
          inStock: true
        },
        {
          product: 'Dragonfruit',
          price: '1$',
          inStock: false
        },
        {
          product: 'Passionfruit',
          price: '2$',
          inStock: true
        },
      ]
      
    },
    {
      category: 'Vegetables',
      products: [
        {
          product: 'Spinach',
          price: '2$',
          inStock: true
        },
        {
          product: 'Pumpkin',
          price: '4$',
          inStock: false
        },
        {
          product: 'Peas',
          price: '1$',
          inStock: true
        }
      ]
    }
  ];

function App() {

  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  
  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }

  return (
    <div className="App">

      <button onClick={() => setChecked(!checked)}>check</button>


      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search.." onChange={handleSearchChange} required></input>
      <button type='submit'>Submit</button>
      </form>

      <div className='FilterableProductTable'>
        <div class='SearchBar'>
          <input type="text" placeholder="Search.." onChange={handleSearchChange} required></input>
          <div className='check'>
            <input type="checkbox" id="showProducts" name="showProducts" onChange={handleChange} checked={checked} value="stock"></input>
            <label for="showProducts" >Only show products in stock</label>
          </div> 
        </div>

        <div class='ProductTable'>
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
              <table>
                  <tr className='ProductCategoryRow'>{object.category}</tr>
                </table>
              <table>
                
                {filteredProducts.map(
                  (product) => {
                    if (checked) {
                      if (product.inStock) {
                        return <>
                        <tr className={product.inStock? '' : 'notInStock'}>
                          <td>{product.product}</td>
                          <td>{product.price}</td>
                        </tr>
                        </> 
                      }
                    }
                    else {
                      return <>
                      <tr className={product.inStock? '' : 'notInStock'}>
                        <td>{product.product}</td>
                        <td>{product.price}</td>
                      </tr>
                      </> 
                    }    
                  }
                  
                )}
              
            </table>
              </>
            }
            
                         
          )}
          

          

        </div>
      </div>

    </div>
  );
}

export default App;
