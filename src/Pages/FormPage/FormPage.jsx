import React, {useState} from 'react';
import {useFormik} from 'formik';
import {Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, VStack} from "@chakra-ui/react";
import * as Yup from 'yup';
import InputComponent from "../../Components/CustomComponents/InputComponent";
import CheckBoxSection from "../../Components/CustomComponents/Form/CheckBoxSection";

function FormPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {}
    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is Required."),
        middleName: Yup.string(),
        lastName: Yup.string().required("Last name is Required."),

    })

    const onSubmitForm = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            alert("ok", JSON.stringify(formik.values))
        }, 3000)
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: onSubmitForm
    })
    return (
        <Box h='100%' w='100%' p={4} color='black'>
            <form onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit()
            }}>

                <VStack w="full">
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

                    <CheckBoxSection />

                    <Button w="320px" isLoading={isLoading} type="submit" colorScheme="purple">
                        Submit
                    </Button>

                </VStack>

            </form>
        </Box>
    );
}

export default FormPage;
