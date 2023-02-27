import React from 'react';
import FieldsetComponent from "../../Components/CustomComponents/FieldsetComponent";
import {Box, HStack} from "@chakra-ui/react";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import {MdGraphicEq} from 'react-icons/md';
function RangeSliderSection(props) {
    return (
        <FieldsetComponent title="Range Slider">
                <Box size="24%">
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Box>
                <Box size="24%">
                    <RangeSlider
                        aria-label={['min', 'max']}
                        colorScheme='pink'
                        defaultValue={[10, 30]}
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Box>
                <Box size="24%">
                    <RangeSlider
                        aria-label={['min', 'max']}
                        colorScheme='pink'
                        defaultValue={[10, 30]}
                        orientation='vertical'
                        minH='32'
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Box>
                <Box size="24%">
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[30, 80]}>
                        <RangeSliderTrack bg='red.100'>
                            <RangeSliderFilledTrack bg='tomato' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0}>
                            <Box color='tomato' as={MdGraphicEq} />
                        </RangeSliderThumb>
                        <RangeSliderThumb boxSize={6} index={1}>
                            <Box color='tomato' as={MdGraphicEq} />
                        </RangeSliderThumb>
                    </RangeSlider>
                </Box>
                <Box size="24%">
                    <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
                        <RangeSliderTrack bg='red.100'>
                            <RangeSliderFilledTrack bg='tomato' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0} />
                        <RangeSliderThumb boxSize={6} index={1} />
                    </RangeSlider>
                </Box>
                <Box size="24%">
                    <RangeSlider
                        aria-label={['min', 'max']}
                        onChangeEnd={(val) => console.log(val)}
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Box>

        </FieldsetComponent>
    );
}

export default RangeSliderSection;
