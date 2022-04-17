
import React from 'react';
import Header from './components/Header';
import ProductListPage from './components/ProductListingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDescriptionPage from './components/ProductDescriptionPage';
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product-description/:id" element={<ProductDescriptionPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
