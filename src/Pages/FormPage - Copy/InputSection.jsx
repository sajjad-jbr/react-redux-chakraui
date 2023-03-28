import React from 'react';
import {
    Box, Button,
    HStack,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightAddon,
    InputRightElement,
    Stack,
    Text
} from "@chakra-ui/react";
import {CheckIcon, PhoneIcon} from '@chakra-ui/icons'
import InputComponent from "../../Components/CustomComponents/InputComponent";
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";

function InputSection({formik, ...props}) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
    return (
        <FieldsetComponent title="Inputs">
            <HStack spacing="auto" w="full">
                <Box w='32%'>
                    <InputComponent
                        id="firstName"
                        w="30%"
                        name="firstName"
                        label="First Name"
                        formik={formik}
                        onChange={formik.getFieldProps('firstName').onChange}
                        onBlur={formik.getFieldProps('firstName').onBlur}/>
                </Box>
                <Box w='32%'>
                    <InputComponent
                        id="middleName"
                        w="30%"
                        name="middleName"
                        label="Middle Name"
                        formik={formik}
                        onChange={formik.getFieldProps('middleName').onChange}
                        onBlur={formik.getFieldProps('middleName').onBlur}/>
                </Box>
                <Box w='32%'>
                    <InputComponent
                        id="lastName"
                        w="30%"
                        name="lastName"
                        label="Last Name"
                        formik={formik}
                        onChange={formik.getFieldProps('lastName').onChange}
                        onBlur={formik.getFieldProps('lastName').onBlur}/>
                </Box>
            </HStack>
            <HStack spacing="auto" w="full">
                <Box w='24%'>
                    <Input placeholder='Basic usage'/>
                </Box>
                <Box w='24%'>
                    <Stack spacing={3}>
                        <Input placeholder='extra small size' size='xs'/>
                        <Input placeholder='small size' size='sm'/>
                        <Input placeholder='medium size' size='md'/>
                        <Input placeholder='large size' size='lg'/>
                    </Stack>
                </Box>
                <Box w='24%'>
                    <Input htmlSize={4} width='auto'/>
                </Box>
                <Box w='24%'>
                    <Stack spacing={3}>
                        <Input variant='outline' placeholder='Outline'/>
                        <Input variant='filled' placeholder='Filled'/>
                        <Input variant='flushed' placeholder='Flushed'/>
                        <Input variant='unstyled' placeholder='Unstyled'/>
                    </Stack>
                </Box>
            </HStack>
            <HStack spacing="auto" w="full">
                <Box w='24%'>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftAddon children='+234'/>
                            <Input type='tel' placeholder='phone number'/>
                        </InputGroup>

                        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                        <InputGroup size='sm'>
                            <InputLeftAddon children='https://'/>
                            <Input placeholder='mysite'/>
                            <InputRightAddon children='.com'/>
                        </InputGroup>
                    </Stack>
                </Box>
                <Box w='24%'>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<PhoneIcon color='gray.300'/>}
                            />
                            <Input type='tel' placeholder='Phone number'/>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                            />
                            <Input placeholder='Enter amount'/>
                            <InputRightElement children={<CheckIcon color='green.500'/>}/>
                        </InputGroup>
                    </Stack>
                </Box>
                <Box w='24%'>

                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                </Box>
                <Box w='24%'>
                    <Text mb='8px'>Value: {value}</Text>
                    <Input
                        value={value}
                        onChange={handleChange}
                        placeholder='Here is a sample placeholder'
                        size='sm'
                    />

                </Box>
            </HStack>
            <HStack spacing="auto" w="full">
                <Box w='24%'>
                    <Stack spacing={3}>
                        <Input focusBorderColor='lime' placeholder='Here is a sample placeholder' />
                        <Input
                            focusBorderColor='pink.400'
                            placeholder='Here is a sample placeholder'
                        />
                        <Input
                            isInvalid
                            errorBorderColor='red.300'
                            placeholder='Here is a sample placeholder'
                        />
                        <Input
                            isInvalid
                            errorBorderColor='crimson'
                            placeholder='Here is a sample placeholder'
                        />
                    </Stack>
                </Box>
                <Box w='24%'>
                    <Stack spacing={3}>
                        <Input placeholder='default placeholder' />
                        <Input
                            placeholder='custom placeholder'
                            _placeholder={{ opacity: 1, color: 'gray.500' }}
                        />
                        <Input
                            color='teal'
                            placeholder='custom placeholder'
                            _placeholder={{ color: 'inherit' }}
                        />
                        <Input
                            color='tomato'
                            placeholder='custom placeholder'
                            _placeholder={{ opacity: 0.4, color: 'inherit' }}
                        />
                    </Stack>
                </Box>
                <Box w='24%'>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                    />
                </Box>
                <Box w='24%'>


                </Box>
            </HStack>
        </FieldsetComponent>
    );
}

export default InputSection;
