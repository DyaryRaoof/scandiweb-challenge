import React from "react";
import emptyCartLogo from '../../images/empty-cart.png';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import MiniCart from "./MiniCart";
import Badge from './StyledComponents/Badge';



class CartButton extends React.Component {
    render = () => {
        return <div>
            <NakedButton>
                <Badge>3</Badge>
                <img src={emptyCartLogo} alt="empty cart" />
            </NakedButton>
            <MiniCart />
        </div>


    }
}

export default CartButton;