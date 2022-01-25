import React, {useState} from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: #1a1a1b;
  color: ${props => props.color || props.theme.colors.primary}; 
  outline: none;
  border: none;
  font-size: 22px;
  resize: none;
  @media ${props => props.theme.media.tablet} {
    border: 1px solid seagreen;
  };  
  @media ${props => props.theme.media.phone} {
    border: 1px solid darkseagreen;
  }  
`

const Console = ({color, ...props}) => {
  const [lines, setLines] = useState(["C:/users/graywa>"])

  const onKeyPress = e => {
    if (e.charCode === 13) {
      setLines([...lines, 'C:/users/graywa>'])
    }
  }

  return (
    <Flex>
      <Flex flexDirection='column' margin='0 10px'>
        {lines.map((line, index) => {
          return <Line key={index} color={color} >{line}</Line>
        })}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  )
}

export default Console
