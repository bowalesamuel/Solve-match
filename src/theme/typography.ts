import palette from "./palette"
import {createMuiTheme} from "@material-ui/core/styles"

const breakpoints = createMuiTheme().breakpoints

export default {
    fontFamilyRegular:"Kilk",
    fontFamilyMedium:"KilkMedium",
    fontFamilyBold:"KilkBold",
    fontType:{
        regular:"Kilk",
        medium:"KilkMedium",
        semiBold:"KilkBold",
        bold:"KilkBold",
        
    },
    h6:{
        color:palette.primary.dark,
        fontWeight:"bold",
        fontSize:"1.5rem",
        lineHeight:"29.9px",
    },
    h3:{
        color:palette.primary.dark,
        fontFamily:"KilkBold",
        fontWeight:"bold",
        fontSize: '2rem',
        whiteSpace:"nowrap",
        lineHeight:"89.71px",
        [breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
        [breakpoints.up('md')]: {
            fontSize:"4.5rem",
          }
    },
    body1:{
        fontFamily:"Kilk",
        color:palette.primary.dark,
        fontWeight:"lighter",
        lineHeight:"29.35px",
        opacity:.9,
        fontSize:"1rem",
        [breakpoints.up('sm')]: {
            fontSize:"1.5rem"
        }
    }
} as any