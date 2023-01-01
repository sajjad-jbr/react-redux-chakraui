import React from 'react';
import {Box, Show, Hide, useColorModeValue, VStack} from "@chakra-ui/react"
import SimpleDashboardSidebar from "../../Components/LayoutComponents/Sidebar/SimpleDashboardSidebar";
import DashboardNavBar from "../../Components/LayoutComponents/Sidebar/DashboardNavBar";
import '../../index.css'

const widthSizeResponsiveContainer = {
    sm: "100%",
    md: "100%",
    lg: "80%",
    xl: "80%",
    "2xl": "80%",
}
const widthSizeResponsiveSidebar = {
    lg: "20%",
    xl: "20%",
    "2xl": "20%",
}

function Index(props) {

    return (
        <Box display="flex" justifyContent='space-between' width="100%" height="100vh">
            <SimpleDashboardSidebar width={widthSizeResponsiveSidebar}/>
            <VStack width={widthSizeResponsiveContainer}
                    borderRightColor={useColorModeValue('gray.200', 'gray.700')}>
                <DashboardNavBar/>
                {props.renderElement()}
            </VStack>
        </Box>
    );
}

export default Index;
