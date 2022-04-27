import styled from 'styled-components';

export const MiniCartItemDiv = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
`;


export const MiniCartLeftCAndMiddleColumnDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => props.isCart ? '1650px' : '100%'};
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
    align-items:  center;
    
`;

export const MiniCartRightColumnDiv = styled(MiniCartPlusMinusSquares)`
    align-items:  flex-start;
`

export const SMIICons = styled.span`
    width: ${props => props.isCart ? '40px' : '24px'} ;
    height: ${props => props.isCart ? '30px' : '24px'} ;
    margin:  1px;
    padding: 3px;
    border: 1px solid black;
    text-align: center;
    font-size: ${props => props.isCart ? '12px' : '9px'};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;
