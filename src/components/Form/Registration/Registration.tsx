import React from "react"
import {useHistory} from "react-router-dom"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Typography, Grid, Box, Button } from "@material-ui/core"
import { Input } from "components/Input"
import { Formik, FormikProps } from "formik"
import * as Yup from 'yup'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: theme.spacing(5),
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(8, 0),
        },
        "& > div": {
            width: "90%",
            margin: theme.spacing(5, 0),
            [theme.breakpoints.up("md")]: {
                width: "50%"
            }
        },
        "& > h4": {
            fontWeight: "bold",
            fontSize: "2.25rem"
        },
        "& > button": {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            padding: theme.spacing(3.5, 14),
            fontSize: "1.5rem",
            lineHeight: "29.62px",
            // fontFamily:"KilkBold",
            textTransform: "capitalize"
        }
    }
}))



interface IRegistrationForm {
    firstName: string
    lastName: string
    class: string
    email: string
    location: string
    school: string
    phoneNumber: string
    department: string
}

const Registration = () => {
    const classes = useStyles()
    const history = useHistory()
    const initiaValues = {
        firstName: "",
        lastName: "",
        class: "",
        email: "",
        location: "",
        school: "",
        phoneNumber: "",
        department: ""
    }
    const validationScheme = Yup.object({
        firstName: Yup.string().min(5, "Firstname is too short").required(),
        lastName: Yup.string().min(5, "Lastname is too short").required(),
        class: Yup.string().min(5, "Class name is too short").required(),
        location: Yup.string().min(5, "Location is too short").required(),
        school: Yup.string().min(5, "School name is too short").required(),
        phoneNumber: Yup.string().min(5, "Phone Number is too short").required(),
        department: Yup.string().min(5, "Department is too short").required(),
    })
    const handleSubmit = (values: IRegistrationForm, actions: any) => {
        alert(JSON.stringify(values, null, 2))
        history.push("/")
    }


    return (
        <Box className={classes.root}>
            <Typography component="h4">
                Registration
            </Typography>
            <Formik onSubmit={handleSubmit}
            validationSchema={validationScheme}
                initialValues={initiaValues}
            >
                {(formikProps: FormikProps<any>) => {
                    return (
                        <>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} >
                                    <Input name="firstName" placeholder="First Name" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="lastName" placeholder="Last Name" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="location" placeholder="Location" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="school" placeholder="School" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="class" placeholder="Class" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="phoneNumber" placeholder="Phone Number" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="Email Address" placeholder="email" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Input name="department" placeholder="Department" />
                                </Grid>
                            </Grid>
                            <Button onClick={formikProps.handleSubmit as any}>
                                Register
                            </Button>
                        </>
                    )
                }}
            </Formik>
        </Box>
    )
}

export default Registration