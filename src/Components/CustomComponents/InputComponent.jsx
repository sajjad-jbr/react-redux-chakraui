import React from 'react';
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import propTypes from 'prop-types';

function InputComponent({onChange, onBlur, formik, id, name, label, ...props}) {
    return (
        <FormControl isInvalid={formik.errors[name]}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Input
                    id={id}
                name={name}
                value={formik.values[name]}
                onChange={formik.getFieldProps(name).onChange}
                onBlur={formik.getFieldProps(name).onBlur}
            />
            <FormErrorMessage color="red.400">
                {
                    <span>
                        {formik.errors[name]}
                    </span>
                }
            </FormErrorMessage>
        </FormControl>
    );
}

InputComponent.defaultProps = {
    id: `input-id-${Math.random() * 100000}`,
    name: "",
    label: "",
    formik: {},
    onChange: ()=>{},
    onBlur: ()=>{},
}

InputComponent.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    formik: propTypes.object.isRequired,
    onChange: propTypes.func,
    onBlur: propTypes.func,
}

export default InputComponent;
