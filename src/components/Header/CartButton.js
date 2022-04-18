import React from "react";
import { connect } from "react-redux";
import emptyCartLogo from '../../images/empty-cart.png';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import MiniCart from "./MiniCart";
import Badge from './StyledComponents/Badge';
import { showOverlay } from '../../redux/ui/ui';



class CartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMiniCart: false
        }
    }

    render = () => {
        return <div>
            <NakedButton onClick={() => {
                this.setState({ showMiniCart: !this.state.showMiniCart });
                this.props.showOverlay(!this.state.showMiniCart);
            }}>
                {this.props.cartItemsLength > 0 && (<Badge>{this.props.cartItemsLength}</Badge>)}
                <img src={emptyCartLogo} alt="empty cart" />
            </NakedButton>
            {
                this.state.showMiniCart && <MiniCart />
            }
        </div>


    }
}

const mapStateToProps = (state) => {
    return {
        cartItemsLength: state.cartReducer.cartItems.length,
        showOverlay: state.uiReducer.showOverlay,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showOverlay: (show) => dispatch(showOverlay(show))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartButton);