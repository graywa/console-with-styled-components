import './App.css'
import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #1a1a1b;
  color: white;  
`

function App() {
  return (
    <AppWrapper>
      <Flex justifyContent='center'>
        <Title color={'seagreen'}>Console cmd 2022. Graywa</Title>
      </Flex>    
      <Flex flexDirection='column' margin='10px'>
        <Console color={'seagreen'} />
        <Button alignSelf='flex-end' color='seagreen'>Send</Button>
      </Flex>    
      
    </AppWrapper>
    
  ) 
}

export default App
