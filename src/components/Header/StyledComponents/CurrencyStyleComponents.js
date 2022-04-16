import styled from 'styled-components';
import NakedButton from '../../Shared/StyledComponents/NakedButton';
import NavULWrapper from './NavULWrapper';

export const CurrencyWrapper = styled.span`
    font-size: 18px;
    `
export const DropdownImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    `
export const NavButton = styled(NakedButton)`
    display: flex;
    align-items: start;
`;

export const CartAndCurrecyWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    `

export const NavDropDownULWrapper = styled(NavULWrapper)`
    display: flex;
    justify-content: start;
    align-items: flex-start;
    `

