import React from 'react'
import classes from './SubTitle.module.css'

type Props = {
    text:String
}

const SubTitle = ({text}:Props) => {

    return (

        <div className={classes.container}>
            
            {text}

        </div>

    )

}

export default SubTitle