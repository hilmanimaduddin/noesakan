import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { PiFishFill } from 'react-icons/pi';
import { GiCirclingFish } from 'react-icons/gi';
import './navbar.css';

export default function Search() {
  const text = 'Kesegaran ikan berasal dari "Noesantara Ikan"';

  // Generate an array of characters from the text
  const characters = text.split('');
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor="rgba(255, 255, 255, 0.5)"
      height={'40px'}
      borderRadius={10}
    >
      <Flex
        w={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={2}
      >
        <Flex
          alignItems={'center'}
          gap={3}
        >
          <PiFishFill fontSize={'25px'} />
          <Box className="typing-animation-container">
            <Text
              fontWeight={'500'}
              className="typing-animation-char"
              color={'gray.600'}
            >
              {text}
            </Text>
          </Box>
        </Flex>
        <Text
          className="spin-animation" // Add the class here
        >
          <GiCirclingFish fontSize={'25px'} />
        </Text>
      </Flex>
    </Box>
  );
}
