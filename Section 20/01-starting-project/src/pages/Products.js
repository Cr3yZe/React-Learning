import { Link } from 'react-router-dom';

const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'},
];

const ProductsPage = () => {
  return <>
  <h1>The Product Page</h1>
  <div>
    <ul>
      {PRODUCTS.map((prod) => (
        <li key={prod.id}>
          <Link to={prod.id}>{prod.title}</Link>
        </li>
      ))}
    </ul>
  </div>
  </>
};

export default ProductsPage;