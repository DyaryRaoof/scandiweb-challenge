import styled from 'styled-components'
import NakedButton from '../../Shared/StyledComponents/NakedButton';

export default styled(NakedButton)`
font-weight: ${props => props.active ? '600' : 'regular'};
color: ${props => props.active ? '#5ECE7B' : '#1D1F22'};
`;