import React from 'react'
import { Button, HStack } from '@chakra-ui/react'

const SelectionBar = () => {
  return (
    <><HStack alignContent={'center'}>
        <Button>10</Button> <Button>20</Button> <Button>30</Button>
    </HStack>
    </>
  )
}

export default SelectionBar