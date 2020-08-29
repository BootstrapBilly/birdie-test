import React from 'react'

import classes from './SortOption.module.css'
import capitalizeFirstChar from '../../../../../../Util/capitalise_first'

type Props = {

    text: String,
    icon_name: String,
    active_filter:String,
    handle_select:Function

}

export const SortOption = ({ text, icon_name, active_filter, handle_select }: Props) => {

    return (

        <div className={classes.container} style={{backgroundColor:active_filter === text ? "#94D4FF" : undefined}} onClick={()=> handle_select(text)}>

            <img src={require(`../../../../../../Assets/Icon/${icon_name}.svg`)} alt="Icon to change filter type" className={classes.icon}/>
            <span className={classes.text}>{capitalizeFirstChar(text.toLowerCase())}</span>

        </div>

    )

}

export default SortOption
