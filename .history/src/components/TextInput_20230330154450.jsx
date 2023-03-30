import { useState } from "react"
import {Textarea,Button,useToast} from "@chakra-ui/react"

const TextInput = () => {
    const [text, setText] = useState('');
  return (
      <>
          <Textarea
              bg="blue.400"
              color='white'
              padding={4}
              marginTop={6}
              height={text}
              onChange{ (e) => setText(e.target.value)}
          />
          
          <Button
              bg='white'
              color='white'
              marginTop={4}
              width='100%'
          >
              Extract Keywords
          </Button>
      </>
  )
}

export default TextInput