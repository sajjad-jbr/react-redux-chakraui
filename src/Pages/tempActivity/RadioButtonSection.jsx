import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {Box, HStack, Stack} from "@chakra-ui/react";
import { Radio, RadioGroup, useRadio, useRadioGroup } from '@chakra-ui/react'

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

function RadioButtonSection(props) {
    const [value, setValue] = React.useState('1')
    const options = ['react', 'vue', 'svelte']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })

    const group = getRootProps()
    return (
        <FieldsetComponent title="Radio Button">
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='row'>
                            <Radio value='1'>First</Radio>
                            <Radio value='2'>Second</Radio>
                            <Radio value='3'>Third</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Box size="24%">
                    <RadioGroup defaultValue='2'>
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='red' value='1'>
                                Radio
                            </Radio>
                            <Radio colorScheme='green' value='2'>
                                Radio
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Box size="24%">
                    <Stack>
                        <Radio size='sm' name='1' colorScheme='red'>
                            Radio
                        </Radio>
                        <Radio size='md' name='1' colorScheme='green'>
                            Radio
                        </Radio>
                        <Radio size='lg' name='1' colorScheme='orange' defaultChecked>
                            Radio
                        </Radio>
                    </Stack>
                </Box>
                <Box size="24%">
                    <RadioGroup defaultValue='1'>
                        <Stack>
                            <Radio value='1' isDisabled>
                                Checked
                            </Radio>
                            <Radio value='2'>Unchecked</Radio>
                            <Radio value='3'>Unchecked</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <RadioGroup defaultValue='1'>
                        <Stack spacing={4} direction='row'>
                            <Radio value='1' isDisabled>
                                Radio 1
                            </Radio>
                            <Radio value='2'>Radio 2</Radio>
                            <Radio value='3'>Radio 3</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Box size="24%">
                    <Radio isInvalid>Radio</Radio>
                </Box>
                <Box size="24%">
                    <HStack {...group}>
                        {options.map((value) => {
                            const radio = getRadioProps({ value })
                            return (
                                <RadioCard key={value} {...radio}>
                                    {value}
                                </RadioCard>
                            )
                        })}
                    </HStack>
                </Box>
                <Box size="24%">

                </Box>
            </HStack>
        </FieldsetComponent>
    );
}

export default RadioButtonSection;
