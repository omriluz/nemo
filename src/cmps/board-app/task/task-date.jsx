import React, { useState } from 'react';
// import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';



export function DatesModalContent() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <section className="dates-modal">
            <div className="details-container">
                <MuiPickersUtilsProvider >
                    <KeyboardDatePicker
                        disableToolbar
                        variant="static"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
        </section>

    )
}


// import React, { useState } from "react";
// import { DatePicker } from "@material-ui/pickers";

// export function StaticDatePicker(){
  
//   const [date, changeDate] = useState(new Date());

//   return (
//       <DatePicker
//         autoOk
//         variant="static"
//         openTo="year"
//         value={date}
//         onChange={changeDate}
        
//       />
//   );
// }

