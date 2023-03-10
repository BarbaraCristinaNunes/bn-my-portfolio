import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const CustomizedTitle = styled(Typography)(({ theme }) => ({
    animation: "titleTransition 1.5s",
    "@keyframes titleTransition": {
        "from": {
            opacity: 0,
            transform: "translate3d(-50px, 0, 0)",
        },
        "to": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        }
    }
}));

const CustomizedParagraph = styled(Typography)(({ seconds }) => ({
    animation: `paragraphTransition ${seconds + 1}s`,
    fontSize: 12.5,
    "@keyframes paragraphTransition": {
        "from": {
            opacity: 0,
        },
        "to": {
            opacity: 1,
        }
    }
}));

export default function Text (props) {
    // console.log("vixi", props.time)
    return (
        
        props.title?
            <ThemeProvider theme={theme}>
                <CustomizedTitle 
                variant={props.variant} 
                align={props.aligment}
                paragraph={true}
                >
                    {props.title}
                </CustomizedTitle>
            </ThemeProvider>
        :
        props.paragraph?
            <ThemeProvider theme={theme}>
                <CustomizedParagraph 
                    align={props.aligment}
                    paragraph={true}
                    variant="overline"
                    fontWeight={props.fontWeight}
                    seconds={props.time}
                >
                    {props.paragraph}
                </CustomizedParagraph>
            </ThemeProvider>
        : ""
        
    )
}