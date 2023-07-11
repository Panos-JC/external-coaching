import './App.css';
import FilterableProductTable from "./FilterableProductTable";

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
  return <>
    <div className="App">
        <FilterableProductTable categories={categories}/>
    </div>
  </>
}

export default App;
