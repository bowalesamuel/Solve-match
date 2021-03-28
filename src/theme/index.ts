import {createMuiTheme,responsiveFontSizes} from "@material-ui/core"

import palette from "./palette"
import typography from "./typography"
import "assets/styles/index.css"

const kilk = {
    fontFamily:"Kilk"
}

const theme = createMuiTheme({
    palette,
    typography:{...typography,fontFamily:"Kilk"},
    overrides:{
        MuiCssBaseline:{
            "@global":{
                "@font-face":[kilk]
            }
        }
    },
    zIndex:{
        appBar:1200,
        drawer:1100
    }
})

export default theme