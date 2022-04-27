import styled from 'styled-components';

export const MiniCartWrapper = styled.div`
    position: absolute;
    top: 78px;
    right: 87px;
    width: 350px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 10px 10px;
    z-index: 999;
`;

export const TotalPrice = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-family:  'RailwayBold';
`;

export const MiniCartButton = styled.button`
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

export const CheckOutButton = styled(MiniCartButton)`
    background-color: #5ECE7B;
    color: white;
    `
