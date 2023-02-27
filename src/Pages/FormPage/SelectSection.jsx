import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {Box, HStack, Select, Stack} from "@chakra-ui/react";
import {MdArrowDropDown} from 'react-icons/md'
function SelectSection(props) {
    return (
        <FieldsetComponent title="Select">
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <Select placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
                <Box size="24%">
                    <Stack spacing={3}>
                        <Select placeholder='extra small size' size='xs' />
                        <Select placeholder='small size' size='sm' />
                        <Select placeholder='medium size' size='md' />
                        <Select placeholder='large size' size='lg' />
                    </Stack>
                </Box>
                <Box size="24%">
                    <Stack spacing={3}>
                        <Select variant='outline' placeholder='Outline' />
                        <Select variant='filled' placeholder='Filled' />
                        <Select variant='flushed' placeholder='Flushed' />
                        <Select variant='unstyled' placeholder='Unstyled' />
                    </Stack>
                </Box>
                <Box size="24%">
                    <Select icon={<MdArrowDropDown />} placeholder='Woohoo! A new icon' />
                </Box>
            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <Select
                        bg='tomato'
                        borderColor='tomato'
                        color='white'
                        placeholder='Woohoo! A new background color!'
                    />
                </Box>
                <Box size="24%">

                </Box>
                <Box size="24%">

                </Box>
                <Box size="24%">
                </Box>
            </HStack>
        </FieldsetComponent>
    );
}

export default SelectSection;
