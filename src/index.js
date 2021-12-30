import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// cut to new file

import { GlobalStyles } from './GlobalStyles'
import { Header, Footer, Viewer, Projects } from './components'
import ourImage from './uclinventorygif.gif'

const App = () => {

    const [quote, setQuote] = useState('')

    useEffect(() => {
        fetch(`https://api.britney.rest`)
            .then(res => res.json())
            .then(data => {
                setQuote(data)
            })
    }, [])

    return (
        <>
        <GlobalStyles />
        <Header>
            <Header.Signature>Joshua Cooper</Header.Signature>
            <Header.MarqueeWrap>
                <marquee behavior="scroll" direction="left">
                    "{quote}"
                </marquee>
                <b> - Britney Spears</b>
            </Header.MarqueeWrap>
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
        </Header>

        <Viewer>
            <Switch>

                <Route exact path="/">
                Hey there.
                </Route>

                <Route path="/projects">
                    <Projects>
                        <Projects.Wrapper>
                            <Projects.Image src={ourImage} />
                            <Projects.DescWrapper>
                                <Projects.ProjectTitle href="https://ucl-inventory.web.app" target="_blank">
                                    Inventory App
                                </Projects.ProjectTitle>
                                    <Projects.ProjectDesc>
                                    This web app <b>reports daily 
                                    inventory numbers</b> for a local Seattle cafe. 
                                    The goal of this app is to <b>expedite a 10-15 minute process 
                                    into 5 minutes or less.</b> The program
                                    will <b>automatically update the inventory 
                                    required</b> based off the day of the week and time of day.</Projects.ProjectDesc>
                                <Projects.IconWrapper>
                                    <Projects.Icon className="fab fa-html5"></Projects.Icon>
                                    <Projects.Icon className="fab fa-css3"></Projects.Icon>
                                    <Projects.Icon className="fab fa-js"></Projects.Icon>
                                    <Projects.Icon className="fab fa-react"></Projects.Icon>
                                </Projects.IconWrapper>
                            </Projects.DescWrapper>
                        </Projects.Wrapper>
                    </Projects> 
                </Route>

            </Switch>
        </Viewer>


        <Footer>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-stack-overflow"></i>
        </Footer>
        </>
    )
}

ReactDOM.render(<Router><App /></Router>, root)