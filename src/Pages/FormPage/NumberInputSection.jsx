import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {
    Box, Button,
    Flex,
    HStack, Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Stack,
    useNumberInput
} from "@chakra-ui/react";

function NumberInputSection(props) {
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
    const [value, setValue] = React.useState('1.53')

    const [value2, setValue2] = React.useState(0)
    const handleChange = (value) => setValue(value)

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 0.01,
            defaultValue: 1.53,
            min: 1,
            max: 6,
            precision: 2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
    return (
        <FieldsetComponent title="Number Input">
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <NumberInput>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box size="24%">
                    <NumberInput defaultValue={15} min={10} max={20}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

                <Box size="24%">
                    <NumberInput step={5} defaultValue={15} min={10} max={30}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box size="24%">
                    <NumberInput defaultValue={15} precision={2} step={0.2}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

                <Box size="24%">
                    <NumberInput defaultValue={15} min={10} max={20}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

                <Box size="24%">
                    <NumberInput
                        defaultValue={15}
                        max={10}
                        keepWithinRange={false}
                        clampValueOnBlur={false}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box size="24%">
                    <NumberInput
                        onChange={(valueString) => setValue(parse(valueString))}
                        value={format(value)}
                        max={50}
                    >
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="50%">
                    <Stack shouldWrapChildren direction='row'>
                        <NumberInput size='xs' maxW={16} defaultValue={15} min={10}>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>

                        <NumberInput size='sm' maxW={20} defaultValue={15} min={10}>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>

                        <NumberInput size='md' maxW={24} defaultValue={15} min={10}>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>

                        <NumberInput size='lg' maxW={32} defaultValue={15} min={10}>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>
                    </Stack>
                </Box>
                <Box size="50%">
                    <Flex>
                        <NumberInput maxW='100px' mr='2rem' value={value2} onChange={handleChange}>
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>
                        <Slider
                            direction="rtl"
                            dir="rtl"
                            d="rtl"
                            w={300}
                            focusThumbOnChange={false}
                            value={value2}
                            onChange={handleChange}
                        >
                            <SliderTrack>
                                <SliderFilledTrack/>
                            </SliderTrack>
                            <SliderThumb fontSize='sm' boxSize='32px' children={value}/>
                        </Slider>
                    </Flex>
                </Box>
            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <NumberInput size='sm' defaultValue={15} min={10}>
                        <NumberInputField focusBorderColor='red.200'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper
                                bg='green.200'
                                _active={{bg: 'green.300'}}
                                children='+'
                            />
                            <NumberDecrementStepper
                                bg='pink.200'
                                _active={{bg: 'pink.300'}}
                                children='-'
                            />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Box size="24%">
                    <HStack maxW='320px'>
                        <Button {...inc}>+</Button>
                        <Input {...input} />
                        <Button {...dec}>-</Button>
                    </HStack>
                </Box>
            </HStack>

        </FieldsetComponent>
    );
}

export default NumberInputSection;
