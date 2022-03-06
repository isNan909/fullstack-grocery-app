import { useState } from 'react';
import type { FormData } from 'interface';
import { useRouter } from 'next/router';
import { postGroceries, editGroceries } from 'services/api';
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
  Spinner,
  useToast,
} from '@chakra-ui/react';

const FormGrocery = ({ form, set }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      if (data.id) {
        try {
          await editGroceries(data.id, data);
          clearFields();
          setIsSubmitting(false);
          toast({
            title: 'Grocery item updated',
            description: 'We updated your grocery inventory',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          toast({
            title: 'Grocery cannot be updated',
            description: 'We could not updated your inventory',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
        router.replace(router.asPath);
        return;
      }
      await postGroceries(data);
      clearFields();
      setIsSubmitting(false);
      toast({
        title: 'Grocery item added',
        description: "We've added your grocery to your inventory.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Grocery item cannot be added',
        description: 'We could not add your grocery to your inventory',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
    }
    router.replace(router.asPath);
    return;
  };

  const clearFields = async () => {
    set({
      name: '',
      quantity: 0,
      id: '',
    });
  };

  return (
    <Box>
      <Stack spacing={8} mx={'auto'} maxW={'lg'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Your Grocery Inventory
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Keep track of your grocery list
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
                handleSubmit(form);
              }}
            >
              <FormControl id="groceryName" isRequired py={2}>
                <FormLabel>Grocery Name</FormLabel>
                <Input
                  type="text"
                  value={form.name.toString()}
                  onChange={(e) => set({ ...form, name: e.target.value })}
                />
              </FormControl>
              <FormControl id="groceryItem" isRequired py={2}>
                <FormLabel>Quantity(kg)</FormLabel>
                <Input
                  type="text"
                  value={+form.quantity}
                  onChange={(e) => set({ ...form, quantity: +e.target.value })}
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
                  {isSubmitting ? (
                    <>
                      <Spinner color="white" />
                    </>
                  ) : (
                    <>Add Grocery</>
                  )}
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
