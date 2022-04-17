import styled from 'styled-components';

export const MiniCartItemDiv = styled.div`
margin-bottom: 40px;
display: flex;
height: 150px;
justify-content: space-between;
`;


export const MiniCartLeftCAndMiddleColumnDiv = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
`;

export const MiniCartParagraph = styled.p`
margin: 0;
margin-bottom: 10px;
`

export const MiniCartPlusMinusSquares = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin-right: 10px;
`;

export const MiniCartRightColumnDiv = styled(MiniCartPlusMinusSquares)`
`

export const SMIICons = styled.div`
width: 15px;
height: 15px;
margin-right: 10px;
padding: 3px;
border: 1px solid black;
text-align: center;
margin-right: 10px;
font-size: 12px;
background-color: ${props => props.backgroundColor};
`;
