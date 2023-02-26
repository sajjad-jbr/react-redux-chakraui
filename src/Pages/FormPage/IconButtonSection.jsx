import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {HStack, IconButton} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon, SearchIcon} from '@chakra-ui/icons'

function IconButtonSection(props) {
    return (
        <FieldsetComponent title="Icon Button">
            <HStack w="full">
                <IconButton aria-label='Search database' icon={<SearchIcon/>}/>
                <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<SearchIcon/>}
                />
                <IconButton
                    colorScheme='teal'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<PhoneIcon/>}
                />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Send email'
                    icon={<EmailIcon/>}
                />

            </HStack>
        </FieldsetComponent>
    );
}

export default IconButtonSection;
