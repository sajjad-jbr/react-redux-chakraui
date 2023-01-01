import React from 'react';
import SidebarContent from './SidebarContent'
import {Flex, useColorModeValue, useDisclosure,} from '@chakra-ui/react';


export default function SimpleDashboardSidebar({width = {}}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Flex
            minH="100vh"
            width={width}
            bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />
        </Flex>
    );
}

