import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { VStack } from "components"
import {Accordion} from "components/Accordion"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        [theme.breakpoints.down("md")]:{
            "& p":{
                fontSize:"1rem"
            }
        },
        [theme.breakpoints.up("md")]:{
            paddingTop:theme.spacing(10),
            "& h3":{
                margin:theme.spacing(7,0)
            },
            "& > p":{
                margin:theme.spacing(8,0)
            }
        },
        "& > p":{
            color:theme.palette.secondary.main,
        },
        "& > div":{
            backgroundColor:"#FFFFE0",
            padding:theme.spacing(2,5),
            borderRadius:".4rem",
            maxWidth:"85rem",
            alignItems:"center",
            width:"90%",
            [theme.breakpoints.up("md")]:{
                width:"75%",
            }
            // "& p":{
            //     lineHeight:"30px",
            //     marginBottom:theme.spacing(8.5),
            //     maxWidth:"70rem",
            //     [theme.breakpoints.up("sm")]:{
            //         lineHeight:"40px",
            //     }
            // }
        }
    }
}))



const FAQ = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    const FAQ = [
        "Who can apply for this challenge","What do I need to participate in the challenge",
        "Do I need to pay for this challenge","How many phases do I have to go through in the competition",
        "How do I know when I pass each phase","When will the cash prizes be given"
    ]

    return(
        <Box className={classes.root}>
             <Typography variant="h3" >
                FAQ
            </Typography>
            <Typography>
                Frequently Asked Questions
            </Typography>
            <VStack>
                {FAQ.map((item,idx) => (
                    <Accordion handleChange={handleChange(`panel${idx+1}`)}
                    isActive={expanded === `panel${idx+1}`}
                    detail={`
                        It is a long established fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many desktop publishing packages and web page
                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                        will uncover many web sites still in their infancy. Various versions have evolved over the
                        years, sometimes`}
                        title={item}
                    />
                ))}
            </VStack>
        </Box>
    )
}


export default FAQ