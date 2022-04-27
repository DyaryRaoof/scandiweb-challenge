import React from "react";

import MiniCartItem from "./MiniCartItem";
import { MiniCartWrapper, TotalPrice, MiniCartButton, CheckOutButton } from './StyledComponents/MiniCart';
import { connect } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "../../redux/cart/cart";
import { withRouter } from "../withRouter";

class MiniCart extends React.PureComponent {


    render = () => {
        const { cartItems, currency, navigate } = this.props;

        const getTotalPrice = () => {
            if (cartItems) {
                const products = cartItems.map(item => item.product);
                const currentCurrency = currency;
                const prices = products.map(product => product.prices.find(price => price.currency.symbol === currentCurrency));
                const priceValues = prices.map(price => price.amount).map((amount, index) => amount * cartItems[index].quantity);
                return priceValues.reduce((a, b) => { return a + b }, 0);
            }

        }

        return (
            <MiniCartWrapper>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontFamily: 'RailwayBold', marginRight: '3px' }}>My Bag,</p>
                    <p>{cartItems.length} items</p>
                </div>
                {
                    cartItems.map((item, index) => {
                        return <MiniCartItem key={index} item={item} currency={currency} />
                    })
                }
                <TotalPrice>
                    <p>Total</p>
                    <p>{`${currency} ${getTotalPrice().toFixed(2)}`}</p>
                </TotalPrice>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <MiniCartButton onClick={() => { navigate('/cart') }}>VIEW BAG</MiniCartButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MiniCart));