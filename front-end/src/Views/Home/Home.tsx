import React, { useEffect, useState } from 'react'

//css
import classes from './Home.module.css'

//components
import Logo from "./Components/Logo/Logo"
import Title from "./Components/Title/Title"
import SubTitle from "./Components/SubTitle/SubTitle"
import Row from "./Components/Row/Row"
import SortBy from "./Components/SortBy/SortBy"

//external
import { useDispatch, useSelector } from "react-redux"
import Masonry from 'react-masonry-css'

//action creators
import { api_request } from '../../Store/Actions/api_request_action'
import { set_filter } from "../../Store/Actions/current_filter_action"

//util
import handle_column_assignment from '../../Util/handle_column_assignment'


export const Home = () => {

    //?selectors
    const response = useSelector((state: any) => state.request.response)
    const current_filter = useSelector((state: any) => state.filter.current)

    //-config
    const dispatch = useDispatch()//initialise the redux useDispatch hook

    //*states
    const [events_to_display, set_events_to_display] = useState([])

    //!effects
    useEffect(() => {

        //fetch the events from the database on intial component render
        dispatch(api_request("single_recipient_events", { care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227" }))

        // eslint-disable-next-line
    }, [])

    const handle_filter = (type: string) => {

        dispatch(set_filter(type))

        if (type === "none") { return set_events_to_display(response.data.events) }
        if (type === "type") {

            const sorted_by_type = response.data.events.sort((a: any, b: any) => (a.payload.event_type > b.payload.event_type) ? 1 : -1)

            return set_events_to_display(sorted_by_type)
        }
        if (type === "date") {

            const sorted_by_type = response.data.events.sort((a: any, b: any) => (a.payload.timestamp > b.payload.timestamp) ? 1 : -1)

            return set_events_to_display(sorted_by_type)
        }

    }

    useEffect(() => {

        if (response && response.data.events) {

            const sorted_by_type = response.data.events.sort((a: any, b: any) => (a.payload.timestamp > b.payload.timestamp) ? 1 : -1)

            return set_events_to_display(sorted_by_type)


        }

    }, [response])

    return (

        <div className={classes.container}>

            <Logo />
            <Title text="Viewing records for Annie" />
            <SubTitle text="ID : ad3512a6-91b1-4d7d-a005-6f8764dd0111" />

            <SortBy active_filter={current_filter} handle_select={(text: string) => handle_filter(text)} />

            {response && response.data.message === "Records fetched successfully" &&

                <Masonry
                    breakpointCols={handle_column_assignment(response.data.events)}
                    className={""}
                    columnClassName={""}
                    style={{
                        display: "flex",
                        marginLeft: "-20px",
                    }}>

                    {events_to_display.map((event: any) => <Row data={event} key={event} />)}

                </Masonry>

            }

        </div>
    )

}

export default Home
