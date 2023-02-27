import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {Box, HStack, Stack} from "@chakra-ui/react";
import { PinInput, PinInputField } from '@chakra-ui/react'
function PinInputSection(props) {
    return (
        <FieldsetComponent title="Pin Input">
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <HStack>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                <Box size="24%">
                    <HStack>
                        <PinInput type='alphanumeric'>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                <Box size="24%">
                    <PinInput otp>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </Box>
                <Box size="24%">
                    <HStack>
                        <PinInput type='alphanumeric' mask>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <HStack>
                        <PinInput manageFocus={false}>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                <Box size="24%">
                    <HStack>
                        <PinInput defaultValue='234'>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                <Box size="24%">
                    <HStack>
                        <PinInput defaultValue='23'>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                <Box size="24%">
                    <HStack>
                        <PinInput placeholder='🥳'>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
            </HStack>
            <HStack w="full" style={{direction: 'ltr'}}>
                <Box size="24%">
                    <Stack>
                        <HStack>
                            <PinInput size='xs'>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>

                        <HStack>
                            <PinInput size='sm'>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>

                        <HStack>
                            <PinInput size='md'>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>

                        <HStack>
                            <PinInput size='lg'>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Stack>
                </Box>
                <Box size="24%">
                    <HStack>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                <Box size="24%">

                </Box>
                <Box size="24%">

                </Box>
            </HStack>
        </FieldsetComponent>
    );
}

export default PinInputSection;
