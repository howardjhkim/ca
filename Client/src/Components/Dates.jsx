import React from "react"
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



export default function Dates() {
    return (
        <DateRangePicker
            // startDate={startDate} // momentPropTypes.momentObj or null,
            // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            // endDate={endDate} // momentPropTypes.momentObj or null,
            // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            // onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
            // focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
    )
}