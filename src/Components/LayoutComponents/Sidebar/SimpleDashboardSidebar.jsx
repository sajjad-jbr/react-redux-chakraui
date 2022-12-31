import React, {ReactNode} from 'react';
import SidebarContent from './SidebarContent'
import {Box, Flex, useColorModeValue, useDisclosure,} from '@chakra-ui/react';


export default function SimpleDashboardSidebar({children}: { children: ReactNode }) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Box
            minH="100vh"
            bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />
        </Box>
    );
}

