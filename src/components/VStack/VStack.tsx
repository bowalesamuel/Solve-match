import React from "react"
import {createStyles,makeStyles,Theme} from "@material-ui/core/styles"
import {Box, BoxProps} from "@material-ui/core"


const useStyles = makeStyles((theme:Theme) => createStyles({
    box:{
        display:"flex",
        flexDirection:"column"
    }
}))


interface IVStack extends BoxProps {

}

const VStack:React.FC<IVStack> = (props) => {
    const classes = useStyles()


    return(
        <Box className={classes.box} {...props}>
        </Box>
    )
}

export default VStack