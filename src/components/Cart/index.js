import React from "react";
import { connect } from "react-redux";
import MiniCartItem from "../Header/MiniCartItem";
import styled from 'styled-components';

const UnderLineDiv = styled.div`
    background-color: #E5E5E5;
    height: 1px; 
    margin: 10px 0;
`

class Cart extends React.PureComponent {
    render = () => {
        const { currency } = this.props;
        return <div style={{ marginRight: '300px', marginLeft: '130px' }}>
            <h1 style={{ fontFamily: 'RailwayBold' }}>CART</h1>
            {
                this.props.cartItems.map((item, index) => {
                    return <div>
                        <MiniCartItem key={index} item={item} currency={currency} isCart />
                        <UnderLineDiv />
                    </div>
                })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        currency: state.uiReducer.currency,
    }
}

export default connect(mapStateToProps)(Cart);