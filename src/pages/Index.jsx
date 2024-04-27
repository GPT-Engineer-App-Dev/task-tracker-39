import { useState } from 'react';
import { Box, Input, Button, VStack, HStack, Text, IconButton, useColorMode, useColorModeValue, Heading } from '@chakra-ui/react';
import { FaSun, FaMoon, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  const addTodo = () => {
    if (input === '') return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading pb={10} size='2xl'>Todo App</Heading>
      <HStack>
        <Input
          variant='filled'
          placeholder='Add a todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTodo} colorScheme='blue' px={8}>Add</Button>
      </HStack>
      <VStack spacing={4} align='stretch' w='100%'>
        {todos.map((todo) => (
          <HStack key={todo.id} bg={bgColor} w='100%' p={4} borderRadius='lg' justifyContent='space-between'>
            <Text fontSize='xl' color={textColor}>{todo.text}</Text>
            <IconButton
              icon={<FaTrash />}
              isRound='true'
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;