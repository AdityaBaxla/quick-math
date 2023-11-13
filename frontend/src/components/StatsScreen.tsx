import { Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'

interface screenStatsProps{
    results : number,
}

const StatsScreen: React.FC<screenStatsProps> = ({results}) => {
  return (
    <> <Container>
        <VStack><Text>{results}</Text></VStack>
    </Container>
    </>
  )
}

export default StatsScreen