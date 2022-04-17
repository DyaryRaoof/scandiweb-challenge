import styled from 'styled-components';

export const MiniCartItemDiv = styled.div`
    margin-bottom: 40px;
    display: flex;
    height: ${props => props.isCart ? '200px' : '150px'};
    justify-content: space-between;
`;


export const MiniCartLeftCAndMiddleColumnDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => props.isCart ? '1650px' : '200px'};
`;

export const MiniCartParagraph = styled.p`
    margin: 0;
    margin-bottom: 10px;
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
`

export const MiniCartPlusMinusSquares = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 20px;
    
`;

export const MiniCartRightColumnDiv = styled(MiniCartPlusMinusSquares)`
`

export const SMIICons = styled.div`
    width: ${props => props.isCart ? '40px' : '15px'} ;
    height: ${props => props.isCart ? '30px' : '15px'} ;
    margin-right: 10px;
    padding: 3px;
    border: 1px solid black;
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    background-color: ${props => props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;
