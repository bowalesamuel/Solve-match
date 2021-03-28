import React from "react"
import {createStyles,makeStyles,Theme} from "@material-ui/core/styles"
import {Box, BoxProps} from "@material-ui/core"


const useStyles = makeStyles((theme:Theme) => createStyles({
    hstack:{
        display:"flex",
        flexDirection:"row"
    }
}))


interface IHStack extends BoxProps {

}

const HStack:React.FC<IHStack> = (props) => {
    const classes = useStyles()


    return(
        <Box display="flex" flexDirection="row" alignItems="center" {...props}>
        </Box>
    )
}

export default HStack