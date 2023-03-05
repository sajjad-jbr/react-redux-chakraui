import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {HStack, Textarea, Text, Box, Stack, RadioGroup, Radio} from "@chakra-ui/react";

function TextareaSection(props) {
    let [value, setValue] = React.useState('')
    const [resize, setResize] = React.useState('horizontal')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    return (
        <FieldsetComponent title="TextArea">
            <HStack w="full" style={{direction: 'ltr'}}>

                <Textarea placeholder='Here is a sample placeholder' />




            </HStack>

            <Stack>
                <Text mb='8px'>Value: {value}</Text>
                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                />
            </Stack>

            <>
                <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
                    <Stack direction='row' spacing={5}>
                        <Radio value='horizontal'>Horizontal</Radio>
                        <Radio value='vertical'>Vertical</Radio>
                        <Radio value='none'>None</Radio>
                    </Stack>
                </RadioGroup>

                <Textarea
                    placeholder='Here is a sample placeholder'
                    size='sm'
                    resize={resize}
                />
            </>

            <Textarea isDisabled placeholder='Here is a sample placeholder' />

            <Textarea isInvalid placeholder='Here is a sample placeholder' />

        </FieldsetComponent>
    );
}

export default TextareaSection;
