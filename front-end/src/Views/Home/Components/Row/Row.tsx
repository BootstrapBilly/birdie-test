import React from 'react'

//css
import classes from './Row.module.css'

//components
import RowItem from "./Components/RowItem"

type Props = {
    data: any
}



export const Row = ({ data }: Props) => {

    console.log(data)

    return (

        <div className={classes.container}>

            <RowItem event_type={data.event_type} date={data.timestamp} />

        </div>
    )

}

export default Row
