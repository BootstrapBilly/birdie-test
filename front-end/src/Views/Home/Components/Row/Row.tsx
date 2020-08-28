import React from 'react'

//css
import classes from './Row.module.css'

//components
import RowItem from "./Components/RowItem"

type Props = {
    data: any
}



export const Row = ({ data }: Props) => {

    if (data.payload.event_type === "general_observation") console.log(data)

    return (

        <div className={classes.container}>

            <RowItem

                event_type={data.event_type}
                date={data.timestamp}
                medication_type={data.payload.medication_type}
                expected_dose_timestamp={data.payload.expected_dose_timestamp}
                medication_failure_reason={data.payload.medication_failure_reason}
                task_definition_description={data.payload.task_definition_description}
                task_schedule_note={data.payload.task_schedule_note}
                dose_size={data.payload.dose_size}
                medical_product_id={data.payload.medical_product_id}
                note={data.payload.note}
                rrule={data.payload.rrule}
                severity={data.payload.severity}

            />

        </div>
    )

}

export default Row
