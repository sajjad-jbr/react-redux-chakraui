import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {FormControl, FormLabel, HStack, Stack, Switch} from "@chakra-ui/react";
import {SimpleGrid} from 'react-icons/index'

function SwitchSection(props) {

    return (
        <FieldsetComponent title="Switch">
            <HStack w="full" style={{direction: 'ltr'}}>

                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        Enable email alerts?
                    </FormLabel>
                    <Switch id='email-alerts' />
                </FormControl>

                <Stack align='center' direction='row'>
                    <Switch size='sm' />
                    <Switch size='md' />
                    <Switch size='lg' />
                </Stack>

                <Stack direction='row'>
                    <Switch colorScheme='red' />
                    <Switch colorScheme='teal' size='lg' />
                </Stack>

                <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
                    <FormLabel htmlFor='isChecked'>isChecked:</FormLabel>
                    <Switch id='isChecked' isChecked />

                    <FormLabel htmlFor='isDisabled'>isDisabled:</FormLabel>
                    <Switch id='isDisabled' isDisabled defaultChecked />

                    <FormLabel htmlFor='isFocusable'>isFocusable:</FormLabel>
                    <Switch id='isFocusable' isFocusable isDisabled />

                    <FormLabel htmlFor='isInvalid'>isInvalid:</FormLabel>
                    <Switch id='isInvalid' isInvalid />

                    <FormLabel htmlFor='isReadOnly'>isReadOnly:</FormLabel>
                    <Switch id='isReadOnly' isReadOnly />

                    <FormLabel htmlFor='isRequired'>isRequired:</FormLabel>
                    <Switch id='isRequired' isRequired />
                </FormControl>

            </HStack>
        </FieldsetComponent>
    );
}

export default SwitchSection;
