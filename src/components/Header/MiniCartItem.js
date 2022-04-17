import React from 'react';
import plusSquare from '../../images/plus-square-icon.png';
import minusSquare from '../../images/minus-square-icon.png';
import {
    MiniCartItemDiv,
    MiniCartLeftCAndMiddleColumnDiv,
    MiniCartParagraph,
    MiniCartPlusMinusSquares,
    MiniCartRightColumnDiv,
    SMIICons
} from './StyledComponents/MiniCartItem';
import { connect } from 'react-redux';
import { decreaseProductQuantity, increaseProductQuantity } from '../../redux/cart/cart';
import NakedButton from '../Shared/StyledComponents/NakedButton';

class MiniCartItem extends React.Component {
    render = () => {
        const product = this.props.item.product;
        return (
            <MiniCartItemDiv>
                <MiniCartLeftCAndMiddleColumnDiv>
                    <MiniCartRightColumnDiv>
                        <div>
                            <MiniCartParagraph>{product.name}</MiniCartParagraph>
                            <MiniCartParagraph>{product.brand}</MiniCartParagraph>
                        </div>
                        <MiniCartParagraph>{`${this.props.currency} ${product.prices
                            .find(price => price.currency.symbol === this.props.currency).amount}`}</MiniCartParagraph>
                        <div style={{ display: 'flex' }}>
                            {product.attributes.map((attribute, index) => {
                                const isSwatch = attribute.type === 'swatch';
                                const displayValue = attribute.items[this.props.item.attributes[index]].value;
                                const backgroundColor = isSwatch ? displayValue : 'white';
                                return <SMIICons backgroundColor={backgroundColor}>
                                    {isSwatch ? '' : displayValue}
                                </SMIICons>
                            })}

                        </div>
                    </MiniCartRightColumnDiv>
                    <MiniCartPlusMinusSquares>
                        <NakedButton onClick={() => { this.props.increaseProductQuantity(this.props.item.id) }}>
                            <img src={plusSquare} alt="minus square" />
                        </NakedButton>
                        <p>{this.props.item.quantity}</p>
                        <NakedButton onClick={() => { this.props.decreaseProductQuantity(this.props.item.id) }}>
                            <img src={minusSquare} alt="minus square" />
                        </NakedButton>
                    </MiniCartPlusMinusSquares>
                </MiniCartLeftCAndMiddleColumnDiv>
                <img src={product.gallery[0]} alt="plus-square-icon" />
            </MiniCartItemDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseProductQuantity: (id) => dispatch(decreaseProductQuantity(id)),
        increaseProductQuantity: (id) => dispatch(increaseProductQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartItem);