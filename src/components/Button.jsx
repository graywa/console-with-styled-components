import React from 'react'
import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
  0% {    
    transform: translateY(0);
  }
  33% {    
    transform: translateY(-6px);
  }
  66% {    
    transform: translateY(6px);
  }
  100% {    
    transform: translateY(0);
  }
`

const StyledButton = styled.button.attrs(props => ({
  outlined: true,
}))`
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;   
  &:hover {
    animation: ${rotateAnimation} 2s infinite linear;
  }
  align-self: ${props => props.alignSelf || 'stretch'};
  ${props => props.primary && css`
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'lightgray'};
  `};
  ${props => props.outlined && css`
  color: ${props => props.color || props.theme.colors.primary};
    background: transparent;
    border: 1px solid ${props => props.color || 'white'};
  `};
`

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`

const Button = (props) => {
  return  <StyledButton {...props}></StyledButton>
}

export default Button
