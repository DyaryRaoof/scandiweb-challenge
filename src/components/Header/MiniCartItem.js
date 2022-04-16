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

class MiniCartItem extends React.Component {
    render = () => {
        return (
            <MiniCartItemDiv>
                <MiniCartLeftCAndMiddleColumnDiv>
                    <MiniCartRightColumnDiv>
                        <div>
                            <MiniCartParagraph>Jupiter</MiniCartParagraph>
                            <MiniCartParagraph>Wayfarer</MiniCartParagraph>
                        </div>
                        <MiniCartParagraph>$76.00</MiniCartParagraph>
                        <div style={{ display: 'flex' }}>
                            <SMIICons>
                                S
                            </SMIICons>
                            <SMIICons active>
                                M
                            </SMIICons>
                        </div>
                    </MiniCartRightColumnDiv>
                    <MiniCartPlusMinusSquares>
                        <img src={plusSquare} alt="minus square" />
                        <p>2</p>
                        <img src={minusSquare} alt="minus square" />
                    </MiniCartPlusMinusSquares>
                </MiniCartLeftCAndMiddleColumnDiv>
                <img src={plusSquare} alt="plus-square-icon" />
            </MiniCartItemDiv>
        )
    }
}

export default MiniCartItem;