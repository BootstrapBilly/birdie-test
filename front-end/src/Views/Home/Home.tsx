import React, { useEffect } from 'react'

//css
import classes from './Home.module.css'

//components
import Logo from "./Components/Logo/Logo"
import Title from "./Components/Title/Title"
import SubTitle from "./Components/SubTitle/SubTitle"
import Row from "./Components/Row/Row"

//external
import { useDispatch, useSelector } from "react-redux"

//action creators
import { api_request } from '../../Store/Actions/api_request_action'

export const Home = () => {

    //?selectors
    const response = useSelector((state:any) => state.request.response)
    
    //-config
    const dispatch = useDispatch()//initialise the redux useDispatch hook

    //!effects
    useEffect(() => {

        //fetch the events from the database on intial component render
        dispatch(api_request("single_recipient_events", { care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227" }))

        // eslint-disable-next-line
    },[])

    if(response){console.log(response.data.events)}

    return (

        <div className={classes.container}>
            <Logo />
            <Title text="Viewing records for Annie" />
            <SubTitle text="ID : ad3512a6-91b1-4d7d-a005-6f8764dd0111" />
           {response && response.data.message === "Records fetched successfully" && response.data.events.map((event:any) => <Row data={event}/>)}
        </div>
    )

}

export default Home
