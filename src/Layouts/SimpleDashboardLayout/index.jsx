import React from 'react';
import {Box} from "@chakra-ui/react"
import SimpleDashboardSidebar from "../../Components/LayoutComponents/Sidebar/SimpleDashboardSidebar";

function Index(props) {
    return (
        <Box display="flex" width="100%" height="100vh">
            <SimpleDashboardSidebar />
            {props.renderElement()}
        </Box>
    );
}

export default Index;
