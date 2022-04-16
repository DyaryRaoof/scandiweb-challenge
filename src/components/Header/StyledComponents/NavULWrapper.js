import styled from 'styled-components'

export default styled.ul`
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: ${props => props.margin ? "0 101px" : "0"};
list-style: none;
background-color: #fff;
padding: 15px 0;
`

