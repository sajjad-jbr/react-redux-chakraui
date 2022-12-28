import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import propTypes from 'prop-types';

let formik = {}

function Form({initialValues, validationSchema, onSubmit, ...props}) {
    formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    console.log("sajjad form: ", formik)

    return (
        <form onSubmit={formik.onSubmit}>
            {props.children}
        </form>
    );
}

Form.defaultProps = {
    initialValues: {},
    validationSchema: {},
    onSubmit: () => {
    },
}

Form.propTypes = {
    initialValues: propTypes.object.isRequired,
    validationSchema: propTypes.object.isRequired,
    onSubmit: propTypes.func.isRequired,
}

export default Form;

