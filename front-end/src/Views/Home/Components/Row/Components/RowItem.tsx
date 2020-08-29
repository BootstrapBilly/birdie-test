import React from 'react'
import classes from './RowItem.module.css'
//util
import capitalizeFirstChar from '../../../../../Util/capitalise_first'

//external
import Moment from 'react-moment';


type Props = {
    date: String,
    event_type: String,
    medication_type?: String,
    expected_dose_timestamp?: String,
    medication_failure_reason?: String,
    task_definition_description?: String,
    task_schedule_note?: String,
    dose_size?: String,
    medical_product_id?: String,
    note?: String,
    rrule?: String,
    severity?: String
}

export const RowItem = ({

    date,
    event_type,
    medication_type,
    expected_dose_timestamp,
    medication_failure_reason,
    task_definition_description,
    task_schedule_note,
    dose_size,
    medical_product_id,
    note,
    rrule,
    severity,


}: Props) => {

    return (

        <div className={classes.container}>

            <Moment className={classes.row_date} format="DD/MM/YY">{date.split("T")[0].split("-").join(" ")}</Moment>
            <span className={classes.row_event}>{capitalizeFirstChar(event_type.split("_").join(" "))}</span>

            {/* Optional fields start here */}

            {medication_type &&

                <span className={classes.row_additional}>
                    Medication type : {capitalizeFirstChar(medication_type.toLowerCase())}
                </span>

            }

            {expected_dose_timestamp &&

                <span className={classes.row_additional}>
                    Expected dose time : {expected_dose_timestamp.split("T")[1].split(".000")[0]}
                </span>

            }

            {medication_failure_reason &&

                <span className={classes.row_additional}>
                    Reason : {capitalizeFirstChar(medication_failure_reason.toLowerCase().split("_").join(" "))}
                </span>

            }

            {task_definition_description &&

                <span className={classes.row_additional}>
                    Description : {capitalizeFirstChar(task_definition_description.toLowerCase())}
                </span>

            }

            {task_schedule_note &&

                <span className={classes.row_additional}>
                    Comment : {capitalizeFirstChar(task_schedule_note.toLowerCase())}
                </span>

            }

            {dose_size &&

                <span className={classes.row_additional}>
                    Dosage : {capitalizeFirstChar(dose_size.toLowerCase())}
                </span>

            }

            {medical_product_id &&

                <span className={classes.row_additional}>
                    Medicine Id : {capitalizeFirstChar(medical_product_id.toLowerCase())}
                </span>

            }

            {note &&

                <span className={classes.row_additional}>
                    Notes : {capitalizeFirstChar(note.toLowerCase())}
                </span>

            }

            {rrule &&

                <span className={classes.row_additional}>
                    Frequency : {capitalizeFirstChar(rrule.split("FREQ=")[1].split(";")[0])}
                </span>

            }

            {severity &&

                <span className={classes.row_additional}>
                    Severity : {capitalizeFirstChar(severity.toLowerCase())}
                </span>

            }


        </div>

    )

}

export default RowItem