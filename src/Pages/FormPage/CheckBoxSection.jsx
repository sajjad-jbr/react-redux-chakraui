import React from 'react';
import {Checkbox, CheckboxGroup, Stack} from '@chakra-ui/react'

function CheckBoxSection(props) {
    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    return (
        <>
            <fieldset style={{width: '100%', borderRadius: 10, border: '1px solid gray', padding: '10px'}} >
                <legend>Check box</legend>

                <Stack spacing={5} direction='row'>
                    <Checkbox isDisabled>Checkbox</Checkbox>
                    <Checkbox isDisabled defaultChecked>
                        Checkbox
                    </Checkbox>
                </Stack>
                <Stack spacing={5} direction='row'>
                    <Checkbox colorScheme='red' defaultChecked>
                        Checkbox
                    </Checkbox>
                    <Checkbox colorScheme='green' defaultChecked>
                        Checkbox
                    </Checkbox>
                </Stack>

                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox size='sm' colorScheme='red'>
                        Checkbox
                    </Checkbox>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                        Checkbox
                    </Checkbox>
                    <Checkbox size='lg' colorScheme='orange' defaultChecked>
                        Checkbox
                    </Checkbox>
                </Stack>
                <Stack spacing={5} direction='row'>
                    <Checkbox isInvalid>Checkbox</Checkbox>

                    <Checkbox spacing='1rem'>Option</Checkbox>

                    <Checkbox iconColor='blue.400' iconSize='1rem'>
                        Option
                    </Checkbox>
                </Stack>

                <Checkbox
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                >
                    Parent Checkbox
                </Checkbox>
                <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                    >
                        Child Checkbox 1
                    </Checkbox>
                    <Checkbox
                        isChecked={checkedItems[1]}
                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                    >
                        Child Checkbox 2
                    </Checkbox>
                </Stack>

                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        <Checkbox value='naruto'>Naruto</Checkbox>
                        <Checkbox value='sasuke'>Sasuke</Checkbox>
                        <Checkbox value='kakashi'>Kakashi</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </fieldset>
        </>

    );
}

export default CheckBoxSection;
