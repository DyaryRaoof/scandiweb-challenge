import styled from 'styled-components';


export const OverlayDiv = styled.div`
    position: absolute;
    top: 90;
    left: 0;
    width: 100%;
    height: ${props => props.height}px;
    background-color: rgba(0, 0, 0, 0.5);
`;