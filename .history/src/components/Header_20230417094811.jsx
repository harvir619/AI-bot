
import { Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/light.png'

const Header = () => {
    return (
      <>
            <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
            <Heading color='white' marginBottom='1rem'>
                Ask anything you want
            </Heading>
            <Text fontSize={25} textAlign='center'>
                Paste in your text below and we'll extract the keywords for you
            </Text>
            
      </>
  )
}

export default Header