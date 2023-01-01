import React from 'react';
import {Flex, FlexProps, IconButton, Text, useColorModeValue} from "@chakra-ui/react";
import {FiMenu} from "react-icons/fi";

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

function MobileNav({ onOpen, ...rest }: MobileProps) {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

        </Flex>
    );
}

export default MobileNav;
