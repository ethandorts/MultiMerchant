import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import UserPage from './Pages/UserPage';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'; // Import persistStore
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import store from './Redux/Store'; // Import your Redux store

// Use ReactDOM.createRoot if you're using React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initialize persistor
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
              <Route path="user" element={<UserPage />} /> {/* Use element prop */}
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
