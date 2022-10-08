import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Form />
    </ChakraProvider>
  )
}

export default App
