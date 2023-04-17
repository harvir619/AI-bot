import React from 'react'
import { Box,Image,Text,Flex } from '@chakra-ui/react'
import logo from '../assets/openai.png'
const Footer = () => {
  return (
      <Box marginTop={50}>
          <Flex justifyContent='right' alignItems='center'>
              <Image src={logo} marginRight={1} />
              <Text>Powered by Artificial Intelligence</Text>
          </Flex>
    </Box>
  )
}

export default Footer