import { useColorMode, IconButton, Flex, Button, Switch, Icon } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HumburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useState } from 'react'
export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')

  return (
    <>
    <Flex>
    <Flex
      position="fixed"
      top="1rem"
      right="1rem"
      align="center"
    >
    <Flex
        display={['none', 'none', 'flex', 'flex']}
    >
    <NextLink href="/" passHref>
        <Button
        as ="a"
        variant ="ghost"
        arial-label="Home"
        my={5}
        >
            Home
        </Button>
    </NextLink>


    <NextLink href="/" passHref>
        <Button
        as ="a"
        variant ="ghost"
        arial-label="Home"
        my={5}
        >
            About
        </Button>
    </NextLink>


    <NextLink href="/" passHref>
        <Button
        as ="a"
        variant ="ghost"
        arial-label="Home"
        my={5}
        >
            Contact Us
        </Button>
    </NextLink>

    </Flex>


    <IconButton
        aria-label='Open Menu'
        size = "lg"
        mr={2}
        icon{...<HumburgerIcon/>}
        display={['flex', 'flex', 'none', 'none']}
        onClick ={() =>{
            changeDisplay('flex')
        }}
        />    
    <Switch
    color='green'
    isChecked={isDark}
    onChange={toggleColorMode}
    />
</Flex>

<Flex
w='100vw'
bgColor='gray.50'
zIndex={20}
h='100vh'
pos='flixed'
top='0'
left='0'
overflow='auto'
flexDir='column'
display={display}
>

    <Flex justify='flex-end'>
        <IconButton
        mt={2}
        mr={2}
        arial-label="Close Menu"
        size="lg"
        icon={<CloseIcon/>}
        onClick ={() =>{
            changeDisplay('none')
        }}
        />
</Flex>


</Flex>
</Flex>
</>
  )
}