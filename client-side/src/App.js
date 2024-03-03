import React from 'react';
import LandingPage from './Pages/LandingPage';
import NavigationBar from './Components/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <>
   <NavigationBar />
   <main>
  <Container fluid style={{padding:0}}>
    <Outlet />
  </Container>
</main>

   </>
  );
}

export default App;
