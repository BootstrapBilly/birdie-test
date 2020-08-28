import React from 'react'

//css
import classes from './Logo.module.css'

//assets
import birdie_logo from "../../../../Assets/Image/logo-birdie.svg"

export const Logo = () => {

    return (

        <div className={classes.container}>
            
            <img src={birdie_logo} alt="Logo of birdie" className={classes.logo} />

        </div>

    )

}

export default Logo
