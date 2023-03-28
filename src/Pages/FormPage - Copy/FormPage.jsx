import React, {useState} from 'react';
import {useFormik} from 'formik';
import {Box, Button, VStack} from "@chakra-ui/react";
import * as Yup from 'yup';
import CheckBoxSection from "./CheckBoxSection";
import InputSection from "./InputSection";
import EditableSection from "./EditableSection";
import IconButtonSection from "./IconButtonSection";
import NumberInputSection from "./NumberInputSection";
import PinInputSection from "./PinInputSection";
import RadioButtonSection from "./RadioButtonSection";
import RangeSliderSection from "./RangeSliderSection";
import SelectSection from "./SelectSection";
import SliderSection from "./SliderSection";
import SwitchSection from "./SwitchSection";
import TextareaSection from "./TextareaSection";

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
                    <InputSection formik={formik}/>

                    <CheckBoxSection/>

                    <EditableSection/>

                    <IconButtonSection />

                    <NumberInputSection />

                    <PinInputSection/>

                    <RadioButtonSection/>

                    <RangeSliderSection/>

                    <SelectSection/>

                    <SliderSection/>

                    <SwitchSection />

                    <TextareaSection/>


                    <Button w="320px" isLoading={isLoading} type="submit" colorScheme="purple">
                        Submit
                    </Button>
                </VStack>

            </form>
        </Box>
    );
}

export default FormPage;
