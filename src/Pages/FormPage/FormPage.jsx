import React from 'react';
import {useFormik} from 'formik';
import Form from "../../Components/CustomComponents/Form/Form";

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
        <div>
            forms
            <Form>

            </Form>
        </div>
    );
}

export default FormPage;
