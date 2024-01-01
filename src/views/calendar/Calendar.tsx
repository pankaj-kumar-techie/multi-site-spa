import React from "react";
import FirstCalendar from "./v1/FirstCalendar";

interface CalendarProps {
    data: any;
    version: "v1";
}

const calendarComponents = {
    v1: FirstCalendar
};

const Calendar: React.FC<CalendarProps> = ({data, version}) => {
    const CalendarComponent = calendarComponents[version];

    return <CalendarComponent data={data}/>;
};

export default Calendar;

