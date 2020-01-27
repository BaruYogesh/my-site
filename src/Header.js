import React from 'react'
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Home,
    About,
    Social
} from './Pages'
import HeaderButton from './HeaderButton'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className='header'>
                    
                        <Link className="header-link" to="/"><HeaderButton title='Home' /></Link>
                    
                        <Link className="header-link" to="/about"><HeaderButton title='About' /></Link>
                    
                        <Link className="header-link" to="/social" style={{borderRight: "2px solid black"}}><HeaderButton title='Social' /></Link>
                        
                    </nav>
            
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <div className='body'>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/social">
                                <Social />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>

                </div>
            </Router>
            
        )
    }
}

export default Header