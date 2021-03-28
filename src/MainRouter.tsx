import React from "react"
import {Switch,Route} from "react-router-dom"
import {Home} from "views/Home"
import {About} from "views/AboutUs"
import {Header} from "components/Header"
import {Footer} from "components/Footer"
import {FAQ} from "views/FAQ"
import {Registration} from "components/Form"
import {Sponsorship} from "views/Sponsorship"


const MainRouter = () => {
    return(
        <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/sponsorship" component={Sponsorship} />
            <Route exact path="/FAQ" component={FAQ} />
        </Switch>
        <Footer/>
        </>
    )
}

export default MainRouter