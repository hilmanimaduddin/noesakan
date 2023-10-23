import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const data = {
  isNew: true,
  imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: '1' }}
              />
            );
          }
          return (
            <BsStar
              key={i}
              style={{ marginLeft: '1' }}
            />
          );
        })}
      <Box
        as="span"
        ml="2"
        color="gray.600"
        fontSize="sm"
      >
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

export default function ProductInDetail() {
  return (
    <>
      <Box>
        <Text
          fontSize={'30px'}
          fontWeight={'bold'}
          color="blue.900"
          pl={10}
          mb={5}
        >
          Produk Lainnya
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          pt={10}
          px={10}
        >
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Ikan Botan
                  </Text>
                  <Text>Rp.24.000/kg</Text>
                </Flex>
                <Text>Depok, Jawa Barat</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1553659971-f01207815844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JhYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Kepiting
                  </Text>
                  <Text>Rp.80.000/kg</Text>
                </Flex>
                <Text>Jakarta</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1623910270365-9b45727235c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1aWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Cumi Segar
                  </Text>
                  <Text>Rp.45.000/kg</Text>
                </Flex>
                <Text>Bandung, Jawa Barat</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1603590179985-5f531578a7d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWthbiUyMHBhdGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Ikan Patin
                  </Text>
                  <Text>Rp.32.000/kg</Text>
                </Flex>
                <Text>Bogor, Jawa Barat</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1585545335512-1e43f40d4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9ic3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    King Lobster
                  </Text>
                  <Text>Rp.120.000/kg</Text>
                </Flex>
                <Text>Jakarta</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://media.istockphoto.com/id/1294862421/id/foto/udang-mentah-di-piring-dari-dekat.jpg?s=612x612&w=0&k=20&c=ApjIdkJ53PwuLApycke3o2jx26BAlqeSSf3wGez4ctg="
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Udang Segar
                  </Text>
                  <Text>Rp.70.000/kg</Text>
                </Flex>
                <Text>Depok, Jawa Barat</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Ikan Cupang
                  </Text>
                  <Text>Rp.25.000/kg</Text>
                </Flex>
                <Text>Jakarta Selatan</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            boxShadow={'xl'}
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1605493725784-585f8d90fe82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWthbiUyMGd1cmFtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Ikan Gurame
                  </Text>
                  <Text>Rp.33.000/kg</Text>
                </Flex>
                <Text>Bogor, Jawa Barat</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
