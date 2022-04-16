
import React from 'react';
import Header from './components/Header';
import ProductListPage from './components/ProductListingPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductListPage />
      </div>
    );
  }
}

export default App;
