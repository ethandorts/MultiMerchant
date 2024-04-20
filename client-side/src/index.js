import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import UserPage from './Pages/UserPage';
import { useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'; 
import { PersistGate } from 'redux-persist/integration/react'; 
import store from './Redux/Store'; 

const UserPageWrapper = () => {
  const { userId } = useParams(); 
  return <UserPage userId={userId} />; 
};


const root = ReactDOM.createRoot(document.getElementById('root'));

const persistor = persistStore(store);

// Render your application with Redux persistence
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Add PersistGate */}
        <Router>
          <Routes>
            <Route path="/" element={<App />}> {/* Use element prop */}
              <Route index element={<LandingPage />} /> {/* Use element prop */}
              <Route path="login" element={<LoginPage />} /> {/* Use element prop */}
              <Route path="register" element={<RegisterPage />} /> {/* Use element prop */}
              <Route path="user/:userId" element={<UserPageWrapper />} /> {/* Use element prop */}
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
