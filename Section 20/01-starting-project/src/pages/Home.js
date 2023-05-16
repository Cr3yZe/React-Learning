import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('products');
  }

  return <>
    <h1>Hello Home Page</h1>
    <button onClick={navigateHandler}>Navigate</button>
  </>
}

export default HomePage;
