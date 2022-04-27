import React from "react";
import { connect } from "react-redux";
import emptyCartLogo from '../../images/empty-cart.png';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import MiniCart from "./MiniCart";
import Badge from './StyledComponents/Badge';
import { showOverlay } from '../../redux/ui/ui';



class CartButton extends React.PureComponent {

    render = () => {
        return <div>
            <NakedButton onClick={() => {
                this.props.showOverlayNow(!this.props.showOverlay);
            }}>
                {this.props.cartItemsLength > 0 && (<Badge>{this.props.cartItemsLength}</Badge>)}
                <img src={emptyCartLogo} alt="empty cart" />
            </NakedButton>
            {
                this.props.showOverlay && <MiniCart />
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
        showOverlayNow: (show) => dispatch(showOverlay(show))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartButton);