import React from 'react';
import {useFormik} from 'formik';
import Form from "../../Components/CustomComponents/Form/Form";
import {Box} from "@chakra-ui/react";

function FormPage(props) {
    const initialValues = {}
    const validationSchema = {}
    const onSubmitForm = () => {
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: onSubmitForm
    })
    return (
        <Box h='100%' w='100%' p={4} color='black'>
            form page
        </Box>
    );
}

export default FormPage;
