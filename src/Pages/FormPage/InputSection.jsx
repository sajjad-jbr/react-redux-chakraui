import React from 'react';
import {Box, HStack} from "@chakra-ui/react";
import InputComponent from "../../Components/CustomComponents/InputComponent";
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";

function InputSection({formik, ...props}) {
    return (
        <FieldsetComponent title="Inputs">
            <HStack spacing="auto" w="full">
                <Box w='32%'>
                    <InputComponent
                        id="firstName"
                        w="30%"
                        name="firstName"
                        label="First Name"
                        formik={formik}
                        onChange={formik.getFieldProps('firstName').onChange}
                        onBlur={formik.getFieldProps('firstName').onBlur}/>
                </Box>
                <Box w='32%'>
                    <InputComponent
                        id="middleName"
                        w="30%"
                        name="middleName"
                        label="Middle Name"
                        formik={formik}
                        onChange={formik.getFieldProps('middleName').onChange}
                        onBlur={formik.getFieldProps('middleName').onBlur}/>
                </Box>
                <Box w='32%'>
                    <InputComponent
                        id="lastName"
                        w="30%"
                        name="lastName"
                        label="Last Name"
                        formik={formik}
                        onChange={formik.getFieldProps('lastName').onChange}
                        onBlur={formik.getFieldProps('lastName').onBlur}/>
                </Box>
            </HStack>
        </FieldsetComponent>
    );
}

export default InputSection;
