// UserPage.jsx
import React, { useEffect } from 'react';
import Profile from '../Components/Profile';
import ProductCard from '../Components/ProductCard';
import '../Pages/css/UserPage.css';
import { Row, Col } from 'react-bootstrap';
import { useGetUserByIDQuery } from '../Redux/UsersSlice';
import { useGetProductsByUserIDQuery } from '../Redux/ProductsSlice'; // Corrected import statement

const UserPage = ({ userId }) => { 
  const { data: user } = useGetUserByIDQuery(userId);
  const { data: products, isLoading, isError } = useGetProductsByUserIDQuery(userId);

  useEffect(() => {
    console.log("User ID:", userId); // Log the userId
    console.log("Products", products);
  }, [userId]);

  if (isError) {
    return <div>Error fetching products</div>;
  }

  if (isLoading || !products) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="user-page-container">
      <div className="profile-container">
        <Profile user={user} />
      </div>
      <div className='container mt-3'>
        <h1>Listed Items</h1>
        <Row className='mt-3'>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default UserPage;
