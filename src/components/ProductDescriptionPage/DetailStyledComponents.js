import styled from 'styled-components';
import NakedButton from '../Shared/StyledComponents/NakedButton';

export const AttributeDiv = styled.div`
    width: 60px;
    height: 40px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: ${props => props.border};
    `;

export const AttributesWrapper = styled.div`
    display: flex;
    `;

export const DescriptionWrappper = styled.div`
margin:0 100px;
padding:0 10px;
width:310px;
`;

export const AddToCartButton = styled(NakedButton)`
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #5ECE7B;
    color: white;
    font-size: 16px;
    padding: 10px;
    width: 292px;
    height: 52px;
`;

export const PriceParagraph = styled.p`
    font-size: '30px'; 
    font-family: 'RobotoCondesedBold';
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    font-size: 30px;
`;
