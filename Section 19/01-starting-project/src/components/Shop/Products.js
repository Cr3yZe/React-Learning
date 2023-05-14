import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  { title: 'MacBook', price: 30, description: 'The best MacBook laptop', id: 1 },
  { title: 'Huawei', price: 15, description: 'The best Huawei laptop', id: 2 },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
