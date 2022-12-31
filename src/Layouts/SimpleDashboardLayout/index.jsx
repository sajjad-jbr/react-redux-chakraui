import React from 'react';
import {Box, useColorModeValue, VStack} from "@chakra-ui/react"
import SimpleDashboardSidebar from "../../Components/LayoutComponents/Sidebar/SimpleDashboardSidebar";
import DashboardNavBar from "../../Components/LayoutComponents/Sidebar/DashboardNavBar";

function Index(props) {

    return (
        <Box display="flex" width="100%" height="100vh">
            <SimpleDashboardSidebar/>
            <VStack
                    borderRightColor={useColorModeValue('gray.200', 'gray.700')}>
                <DashboardNavBar/>
                {props.renderElement()}
            </VStack>
        </Box>
    );
}

export default Index;
