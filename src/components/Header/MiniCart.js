import React from "react";

import MiniCartItem from "./MiniCartItem";
import { MiniCartWrapper } from './StyledComponents/MiniCart';
import styled from 'styled-components';

const TotalPrice = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-family:  'RailwayBold';
`;

const MiniCartButton = styled.button`
    border: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    font-family:  'RailwayBold';
    border: 1px solid black;
    width: 150px;
    cursor: pointer;
    background-color: white;
`;

const CheckOutButton = styled(MiniCartButton)`
    background-color: #5ECE7B;
    color: white;
    `



class MiniCart extends React.Component {
    render = () => {
        return (
            <MiniCartWrapper>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontFamily: 'RailwayBold', marginRight: '3px' }}>My Bag,</p>
                    {' '}
                    <p>2 items</p>
                </div>
                {
                    [1, 2, 3].map(item => {
                        return <MiniCartItem />
                    })
                }
                <TotalPrice>
                    <p>Total</p>
                    <p>$76.00</p>
                </TotalPrice>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <MiniCartButton>VIEW BAG</MiniCartButton>
                    <CheckOutButton>CHECK OUT</CheckOutButton>
                </div>
            </MiniCartWrapper>
        )
    }
}

export default MiniCart;