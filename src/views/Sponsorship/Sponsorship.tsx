import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography,Button } from "@material-ui/core"



const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display:"flex",
        overflowX:"hidden",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        [theme.breakpoints.up("md")]:{
            paddingTop:theme.spacing(15),
            "& > p":{
                margin:theme.spacing(7,0)
            },
        },
        "& > p":{
            color:theme.palette.secondary.main
        },
        "& button": {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            lineHeight: "29.62px",
            textTransform: "capitalize",
            marginLeft:"50% !important",
            whiteSpace:"nowrap",
            transform: "translateX(-50%)",
            padding: theme.spacing(1.5, 4),
            [theme.breakpoints.up("md")]:{
                padding: theme.spacing(3.5, 14),
                fontSize: "1.5rem",
                margin: theme.spacing(10,0),
            }
        },
        "& > div":{
            backgroundColor:"#FFFFE0",
            borderRadius:".4rem",
            width:"75%%",
            maxWidth:"85rem",
            marginTop:theme.spacing(7.5),
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







const Sponsorship = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography variant="h3" >
            Solve Match Fund Sponsorship
            </Typography>
            <Typography>
            Men as Bridges: Buying Assets in the Future
            </Typography>
            <Box>
                <Typography>
                    If you have been concerned with how to engraft your name in the sands of time, I will love to show you how to do it the right way!
                </Typography>
                <Typography>
                    Planting seeds in humans are the best way to invest in a walking breathing influential tool that can multiply the little that you could do into something massive that can transform nations.
                </Typography>
                <Typography>
                    An investment in Jeff Bezos birth the global retail giant - Amazon.
                </Typography>
                <Typography>
                    An investment in Ibukun Awosika birth the rise of one of Africa's leading businesswoman and I must declare that an investment in humans still stands as the leading, most profitable activity to venture in.
                </Typography>
                <Typography>
                    We are currently fundraising in other to sponsor students as they resume back for the new session.
                </Typography>
                <Typography>
                    Our goal is to help them revitalize the culture of reading as they prepare for a new session and also provide funds that can be used in facilitating preparation for school!
                </Typography>
                <Typography>
                    This is a sure investment with a 100% Return on Investment Guarantee to the lives of many.
                </Typography>
                <Typography>
                    Click on this link to begin the walk into the impact investment.
                </Typography>
                <Button>
                    Become a Sponsor
                </Button>
            </Box>
        </Box>
    )
}


export default Sponsorship