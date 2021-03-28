import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { VStack } from "components"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        [theme.breakpoints.up("md")]:{
            paddingTop:theme.spacing(10),
            "& h3":{
                margin:theme.spacing(7,0)
            },
        },
        "& > div":{
            backgroundColor:"#FFFFE0",
            borderRadius:".4rem",
            width:"75%%",
            maxWidth:"85rem",
            alignItems:"center",
            padding:theme.spacing(5),
            [theme.breakpoints.up("md")]:{
                padding:theme.spacing(10),
            },
            "& p":{
                lineHeight:"30px",
                marginBottom:theme.spacing(8.5),
                maxWidth:"70rem",
                [theme.breakpoints.up("md")]:{
                    lineHeight:"40px",
                }
            }
        }
    }
}))







const About = () => {
    const classes = useStyles()


    return (
        <Box className={classes.root}>
            <Typography variant="h3" >
                About Us
            </Typography>
            <VStack>
                <Typography>
                    <Typography>
                    Solve Match is an interactive gaming platform that allows students to compete and win prizes for their knowledge.<br/>
                    </Typography>
                    <Typography>
                    We want to accelerate the experience students have with learning and setting up challenges in form of Quizzes have been proven to be a great source of achieving that, contributing to an over 45% increase in students' interest in learning.<br/>
                    </Typography>
                    <Typography>
                    Solve Match has decided to take it a step further by constantly rewarding users for the times spent on our platform learning.<br/>
                    
                    </Typography>
                    <Typography>
                    Our target at Solve Match is that:<br/>
                    
                    </Typography>
                    <Typography>
                    - When students think fun while learning, we should be the first on their minds.<br/>
                    
                    </Typography>
                    <Typography>
                    - When students desire to earn from their knowledge even while as students, we should be the first on their minds.<br/>
                    
                    </Typography>
                    <Typography>
                    - When students need the right environment to challenge their creativity and reward their discipline to study, we should be the first on their minds.
                
                    </Typography>
                </Typography>
            </VStack>
        </Box>
    )
}


export default About