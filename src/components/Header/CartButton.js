import React from "react";
import { connect } from "react-redux";
import emptyCartLogo from '../../images/empty-cart.png';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import MiniCart from "./MiniCart";
import Badge from './StyledComponents/Badge';
import { showOverlay } from '../../redux/ui/ui';



class CartButton extends React.PureComponent {

    render = () => {

        const { showOverlayNow, cartItemsLength, showOverlay } = this.props;

        return <div>
            <NakedButton onClick={() => {
                showOverlayNow(!this.props.showOverlay);
            }}>
                {cartItemsLength > 0 && (<Badge>{cartItemsLength}</Badge>)}
                <img src={emptyCartLogo} alt="empty cart" />
            </NakedButton>
            {
                showOverlay && <MiniCart />
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