import React from 'react'
import classes from './Title.module.css'

type Props = {
    text:String
}

export const Title = ({text}:Props) => {

    return (

        <div className={classes.container}>

            {text}
            
        </div>

    )

}

export default Title