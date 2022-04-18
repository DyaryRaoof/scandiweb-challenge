import styled from 'styled-components';
import NakedButton from '../Shared/StyledComponents/NakedButton';


export const PageWrapper = styled.div`
  margin: 0 110px;
  `
export const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 20px;
    background-color: #fff;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        border-radius: 5px;
    };
    max-width: 600px;
    max-height: 680px;
    `

export const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    `

export const ItemImage = styled.img`
        overflow: hidden;
        object-fit: contain;
        width: 100%;
        height: 630px;
        `

export const OutOfStockDiv = styled.div`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const ItemCardButton = styled(NakedButton)`
    opacity: ${props => !props.inStock ? 0.5 : 1};
`

export const OutOfStockHeader = styled.h1`
    z-index: 100;
    position: absolute;
    opacity: ${props => props.inStock ? 1 : 0.5};
    color: gray;
`
