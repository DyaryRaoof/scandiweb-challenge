import React from "react";
import emptyCartLogo from '../../images/empty-cart.png';
import NakedButton from '../Shared/StyledComponents/NakedButton';
import MiniCart from "./MiniCart";
import Badge from './StyledComponents/Badge';



class CartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMiniCart: false
        }
    }

    render = () => {
        return <div>
            <NakedButton onClick={() => { this.setState({ showMiniCart: !this.state.showMiniCart }) }}>
                <Badge>3</Badge>
                <img src={emptyCartLogo} alt="empty cart" />
            </NakedButton>
            {
                this.state.showMiniCart && <MiniCart />
            }
        </div>


    }
}

export default CartButton;