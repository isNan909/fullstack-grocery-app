import { FormEvent, useState } from 'react';
import type { NextPage } from 'next';
import type { groceryData } from 'interface';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const FormGrocery: NextPage = () => {
  const [grocery, setGrocery] = useState<groceryData>({
    name: '',
    quantity: 0,
    id: '',
  });

  const handleSubmit = (grocery: {}) => {
    console.log(grocery);
    setGrocery({
      name: '',
      quantity: 0,
      id: '',
    });
  };

  return (
    <Box minH={'100vh'} width="100%">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Your Grocery Inventory
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Keep track of your grocery list 🥕
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(grocery);
              }}
            >
              <FormControl id="groceryName" isRequired py={2}>
                <FormLabel>Grocery Name</FormLabel>
                <Input
                  type="text"
                  value={grocery.name.toString()}
                  onChange={(e) =>
                    setGrocery({ ...grocery, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="groceryItem" isRequired py={2}>
                <FormLabel>Quantity(kg)</FormLabel>
                <Input
                  type="text"
                  value={+grocery.quantity}
                  onChange={(e) =>
                    setGrocery({ ...grocery, quantity: +e.target.value })
                  }
                />
              </FormControl>
              <Stack spacing={10} mt={6}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                >
                  Add Grocery
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FormGrocery;
