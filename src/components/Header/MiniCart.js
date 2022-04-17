import React from "react";

import MiniCartItem from "./MiniCartItem";
import { MiniCartWrapper, TotalPrice, MiniCartButton, CheckOutButton } from './StyledComponents/MiniCart';
import { connect } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "../../redux/cart/cart";

class MiniCart extends React.Component {
    getTotalPrice = () => {
        if (this.props.cartItems) {
            const products = this.props.cartItems.map(item => item.product);
            const currentCurrency = this.props.currency;
            const prices = products.map(product => product.prices.find(price => price.currency.symbol === currentCurrency));
            const priceValues = prices.map(price => price.amount).map((amount, index) => amount * this.props.cartItems[index].quantity);
            return priceValues.reduce((a, b) => { return a + b }, 0);
        }

    }

    render = () => {
        return (
            <MiniCartWrapper>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontFamily: 'RailwayBold', marginRight: '3px' }}>My Bag,</p>
                    <p>{this.props.cartItems.length} items</p>
                </div>
                {
                    this.props.cartItems.map(item => {
                        return <MiniCartItem key={item.id} item={item} currency={this.props.currency} />
                    })
                }
                <TotalPrice>
                    <p>Total</p>
                    <p>{`${this.props.currency} ${this.getTotalPrice()}`}</p>
                </TotalPrice>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <MiniCartButton>VIEW BAG</MiniCartButton>
                    <CheckOutButton>CHECK OUT</CheckOutButton>
                </div>
            </MiniCartWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        currency: state.uiReducer.currency,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseProductQuantity: (id) => dispatch(increaseProductQuantity(id)),
        decreaseProductQuatity: (id) => dispatch(decreaseProductQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);