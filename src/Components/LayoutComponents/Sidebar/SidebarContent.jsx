import React from 'react';
import {Box, BoxProps, CloseButton, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import NavItem from "./NavItem";
import {FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp} from "react-icons/fi";
import {IconType} from "react-icons";
import {Link, NavLink} from "react-router-dom";

interface LinkItemProps {
    name: string;
    icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
    {name: 'خانه', icon: FiHome, route: '/simple-dashboard'},
    {name: 'فرم', icon: FiTrendingUp, route: 'forms'},
    {name: 'جدول', icon: FiCompass, route: 'tables'},
    {name: 'نمودار', icon: FiStar, route: 'charts'},
    {name: 'کامپیوننت ها', icon: FiSettings, route: 'components'},
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

function SidebarContent({onClose, ...rest}: SidebarProps) {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderLeftWidth="1px"
            borderLeftColor={useColorModeValue('gray.200', 'gray.700')}
            w='100%'
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
            </Flex>
            {LinkItems.map((link) => (
                <NavItem icon={link.icon} to={link.route} key={link.route}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;
