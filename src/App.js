
import React from 'react';
import Header from './components/Header';
import ProductListPage from './components/ProductListingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDescriptionPage from './components/ProductDescriptionPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product-description/:id" element={<ProductDescriptionPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
