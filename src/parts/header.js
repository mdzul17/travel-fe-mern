import React from 'react'

import Button from 'elements/Button'
import BrandIcon from 'parts/iconText'

export default function Header(props){
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

    return(
        <header className="spacing-sm">
            <nav className="navbar navbar-expand-lg navbar-light">
                <BrandIcon />
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="">
                                Home
                            </Button>
                        </li>    
                        <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                            <Button className="nav-link" type="link" href="">
                                Browse By
                            </Button>
                        </li>    
                        <li className={`nav-item${getNavLinkClass("/stories")}`}>
                            <Button className="nav-link" type="link" href="">
                                Stories
                            </Button>
                        </li>    
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="">
                                Agents
                            </Button>
                        </li>    
                    </ul>
                </div>
            </nav>
        </header>
    )
}