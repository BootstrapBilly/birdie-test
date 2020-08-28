import React from 'react'
import classes from './RowItem.module.css'

type Props = {
    date:String,
    event_type:String
}

export const RowItem = ({date, event_type} : Props) => {

    return (

        <div className={classes.container}> 
            
           <span>{date.split("T")[0]}</span>
            <span>{event_type.split("_").join(" ")}</span>

        </div>

    )

}

export default RowItem