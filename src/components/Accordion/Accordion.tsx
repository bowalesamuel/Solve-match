import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from "react-icons/md"



const Accordion = withStyles({
    root: {
        // border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        // '&:not(:last-child)': {
        //     borderBottom: 0,
        // },
        // "& > div:last-child": {
        //     borderBottomWidth: "0 !important"
        // },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto',
        }
    },

    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "#FFFFE0",
        padding: "1rem",
        // marginBottom: -1,
        minHeight: 56,
        '&:not(:last-child)': {
            borderBottom: '1px solid #C4C4C4',
        },
        // "& :last-child": {
        //     borderBottomWidth: "0 !important"
        // },
        '&$expanded': {
            minHeight: 56,
        },
        "& p": {
            fontWeight: "bold",
            fontSize: "2rem"
        }
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

interface IProps {
    title: string;
    detail: string
    isActive: boolean;
    handleChange: any
}

const AccordionComponent: React.FC<IProps> = ({ title, detail, isActive, handleChange }) => {

    return (
        <Accordion square expanded={isActive} onChange={handleChange} >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                expandIcon={<MdExpandMore />}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{detail}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
export default AccordionComponent