import React, { useEffect, useState } from "react";
import { CalendarEvent, Section } from "../../../modal/Section";

const FirstCalendar: React.FC<{ data: Section }> = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calendarData, setCalendarData] = useState<Section>();

    useEffect(() => {
        setCalendarData(props.data);
    }, [props.data]);

    const renderCalendar = () => {
        const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const startingDay = firstDayOfMonth.getDay();

        const calendar = [];

        for (let i = 0; i < startingDay; i++) {
            calendar.push(
                <div key={`empty-${i}`} className="calendar-day empty">
                    <span className="day-number"></span>
                </div>
            );
        }

        const filteredEvents = calendarData?.data?.calendar?.filter(
            (event: CalendarEvent) => {
                console.log('Event:', event);

                if (event.date) {
                    const eventDate = new Date(event.date);
                    const isSameMonth = eventDate.getMonth() === selectedDate.getMonth();
                    const isSameYear = eventDate.getFullYear() === selectedDate.getFullYear();

                    console.log('isSameMonth:', isSameMonth);
                    console.log('isSameYear:', isSameYear);

                    return isSameMonth && isSameYear;
                }

                return false;
            }
        ) || [];

        console.log('filteredEvents in renderCalendar:', filteredEvents);

        for (let i = 1; i <= daysInMonth; i++) {
            const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
            const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

            const isTrekEvent = filteredEvents.some(
                (event: CalendarEvent) => event.date === formattedCurrentDate
            );

            calendar.push(
                <div
                    key={i}
                    className={`calendar-day ${isTrekEvent ? "trek-event" : ""}`}
                    onClick={() => setSelectedDate(currentDate)}
                >
                    <span className={`day-number ${isTrekEvent ? "bg-yellow-300" : ""}`}>{i}</span>
                </div>
            );
        }

        return calendar;
        };


    const filteredEvents = calendarData?.data?.calendar?.filter(
        (event: CalendarEvent) => {
            if (event.date) {
                const eventDate = new Date(event.date);
                const isSameMonth = eventDate.getMonth() === selectedDate.getMonth();
                const isSameYear = eventDate.getFullYear() === selectedDate.getFullYear();

                console.log('isSameMonth in filteredEvents:', isSameMonth);
                console.log('isSameYear in filteredEvents:', isSameYear);

                return isSameMonth && isSameYear;
            }

            return false;
        }
    ) || [];

    console.log('filteredEvents outside renderCalendar:', filteredEvents);


    return (
        <div className="max-w-screen-xl mx-auto mt-8 flex">
            <div className="w-2/3 p-4">
                <h2 className="text-lg font-semibold mb-4">
                    {filteredEvents.length > 0
                        ? `Trek Events in ${selectedDate.toLocaleString("en-us", { month: "long", year: "numeric" })}`
                        : "No Trek Events in Selected Month"}
                </h2>
                {filteredEvents.length > 0 ? (
                    <ul>
                        {filteredEvents.map((event: CalendarEvent, index: number) => (
                            <li key={index} className="mb-4">
                                <h3 className="text-xl font-semibold">{event.name}</h3>
                                <p className="text-gray-500 mb-2">{event.date && new Date(event.date).toDateString()}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No events in the selected month.</p>
                )}
            </div>
            <div className="w-1/3 p-4">
                <div className="calendar bg-white rounded-lg shadow-md">
                    <div className="calendar-header flex justify-between items-center mb-4">
                        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
                            &lt;
                        </button>
                        <h2 className="text-xl font-semibold">
                            {new Date(selectedDate).toLocaleString("en-us", { month: "long", year: "numeric" })}
                        </h2>
                        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
                            &gt;
                        </button>
                    </div>
                    <div className="calendar-days grid grid-cols-7 gap-1 mb-4">
                        <div className="day">Sun</div>
                        <div className="day">Mon</div>
                        <div className="day">Tue</div>
                        <div className="day">Wed</div>
                        <div className="day">Thu</div>
                        <div className="day">Fri</div>
                        <div className="day">Sat</div>
                    </div>
                    <div className="calendar-grid grid grid-cols-7 gap-1">{renderCalendar()}</div>
                </div>
            </div>
        </div>
    );
};

export default FirstCalendar;
