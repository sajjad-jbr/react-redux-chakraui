import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {Box, Editable, EditableInput, EditablePreview, EditableTextarea, HStack} from "@chakra-ui/react";

function EditableSection(props) {
    return (
        <FieldsetComponent title="Editable">
            <HStack w="full">
                <Box w='32%'>
                    {/*Click the text to edit*/}
                    <Editable border="1px solid gray" borderRadius="10" defaultValue='Take some chakra'>
                        <EditablePreview/>
                        <EditableInput/>
                    </Editable>
                </Box>
                <Box w='32%'>
                    {/*Click the text to edit*/}
                    <Editable border="1px solid gray" borderRadius="10" defaultValue='Take some chakra'>
                        <EditablePreview/>
                        <EditableTextarea/>
                    </Editable>
                </Box>
            </HStack>
        </FieldsetComponent>
    );
}

export default EditableSection;
