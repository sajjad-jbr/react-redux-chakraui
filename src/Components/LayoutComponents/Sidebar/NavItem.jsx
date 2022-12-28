import React, {ReactText} from 'react';
import {Flex, FlexProps, Icon, Link} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {NavLink} from "react-router-dom";

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}

function NavItem({icon, children, ...rest}: NavItemProps) {
    return (
        <Link href={rest.to} style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        ml="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
}

export default NavItem;
