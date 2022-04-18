
import React from 'react';
import Header from './components/Header';
import ProductListPage from './components/ProductListingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDescriptionPage from './components/ProductDescriptionPage';
import Cart from './components/Cart';
import styled from 'styled-components';
import { connect } from 'react-redux';

const OverlayDiv = styled.div`
    position: fixed;
    top: 90px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`;


class App extends React.Component {

  render() {
    return (
      <div style={this.props.showOverlay ? { overflow: 'hidden', height: '98vh' } : {}}>
        <Router>
          <Header />
          {this.props.showOverlay && <OverlayDiv />}
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

const mapStateToProps = (state) => {
  return {
    showOverlay: state.uiReducer.showOverlay,
  }
}

export default connect(mapStateToProps)(App);
