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
import { decreaseProductQuantity, increaseProductQuantity, removeProduct } from '../../redux/cart/cart';
import NakedButton from '../Shared/StyledComponents/NakedButton';

class MiniCartItem extends React.Component {
    render = () => {
        const product = this.props.item.product;
        const isCart = this.props.isCart;
        return (
            <MiniCartItemDiv isCart={isCart}>
                <MiniCartLeftCAndMiddleColumnDiv isCart={isCart}>
                    <MiniCartRightColumnDiv>
                        <div>
                            <MiniCartParagraph
                                isCart={isCart}
                                fontFamily={isCart ? "RailwayBold" : ''}
                                fontSize={isCart ? '30px' : 'large'}>
                                {product.name}
                            </MiniCartParagraph>
                            <MiniCartParagraph
                                isCart={isCart}
                                fontSize={isCart ? '30px' : 'large'}>
                                {product.brand}
                            </MiniCartParagraph>
                        </div>
                        <MiniCartParagraph
                            isCart={this.props.isCart}
                            fontFamily={isCart ? "RailwayBold" : ''}
                            fontSize={isCart ? '24px' : 'large'}>
                            {`${this.props.currency} ${product.prices
                                .find(price => price.currency.symbol === this.props.currency).amount}`}
                        </MiniCartParagraph>
                        <div style={{ display: 'flex' }}>
                            {product.attributes.map((attribute, index) => {
                                const isSwatch = attribute.type === 'swatch';
                                const displayValue = attribute.items[this.props.item.attributes[index]].value;
                                const backgroundColor = isSwatch ? displayValue : 'white';
                                return <SMIICons backgroundColor={backgroundColor} isCart={isCart}>
                                    {isSwatch ? '' : displayValue}
                                </SMIICons>
                            })}

                        </div>
                    </MiniCartRightColumnDiv>

                </MiniCartLeftCAndMiddleColumnDiv>
                <div style={{ display: 'flex' }}>
                    <MiniCartPlusMinusSquares>
                        <NakedButton onClick={() => { this.props.increaseProductQuantity(this.props.item.id) }}>
                            <img style={{ width: isCart ? '40px' : '32px' }} src={plusSquare} alt="minus square" />
                        </NakedButton>
                        <p>{this.props.item.quantity}</p>
                        <NakedButton onClick={() => {
                            if (this.props.item.quantity > 1) {
                                this.props.decreaseProductQuantity(this.props.item.id)
                            } else {
                                this.props.removeProduct(this.props.item.id)
                            }
                        }}>
                            <img style={{ width: isCart ? '40px' : '32px' }} src={minusSquare} alt="minus square" />
                        </NakedButton>
                    </MiniCartPlusMinusSquares>
                    <img style={{ width: isCart ? '200px' : '120px', height: isCart ? '200px' : '140px', objectFit: 'cover', objectPosition: '0% 0%' }} src={product.gallery[0]} alt="plus-square-icon" />
                </div>
            </MiniCartItemDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseProductQuantity: (id) => dispatch(decreaseProductQuantity(id)),
        increaseProductQuantity: (id) => dispatch(increaseProductQuantity(id)),
        removeProduct: (id) => dispatch(removeProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartItem);