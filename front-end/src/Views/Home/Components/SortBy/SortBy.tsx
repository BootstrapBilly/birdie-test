import React from 'react'

import classes from './SortBy.module.css'

//components
import SortOption from "./Components/SortOption/SortOption"

type Props = {
    active_filter:String,
    handle_select:Function
}
export const SortBy = ({active_filter, handle_select} : Props) => {

    return (

        <div className={classes.container}>

            <span className={classes.title}>Sort by :</span>

            <div className={classes.option_container}>

                <SortOption text={"date"} icon_name="calendar" active_filter={active_filter} handle_select={(text:string) => handle_select(text)} />
                <SortOption text={"type"} icon_name="woman" active_filter={active_filter} handle_select={(text:string) => handle_select(text)}/>

            </div>

        </div>

    )

}

export default SortBy
