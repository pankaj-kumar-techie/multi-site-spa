import React, { useState } from "react";

interface TrekEvent {
    date: Date;
    title: string;
    duration: string;
    price: number;
}

const TrekCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const trekEvents: TrekEvent[] = [
        { date: new Date(2023, 3, 15), title: "Mountain Trek", duration: "7 days", price: 500 },
        { date: new Date(2023, 3, 22), title: "Forest Expedition", duration: "5 days", price: 400 },
        // Add more trek events as needed
    ];

    const filteredEvents = trekEvents.filter(
        (event) => event.date.getMonth() === selectedDate.getMonth() && event.date.getFullYear() === selectedDate.getFullYear()
    );

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

        for (let i = 1; i <= daysInMonth; i++) {
            const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
            const isTrekEvent = filteredEvents.some((event) => event.date.toDateString() === currentDate.toDateString());

            calendar.push(
                <div
                    key={i}
                    className={`calendar-day ${currentDate.toDateString() === selectedDate.toDateString() ? "selected" : isTrekEvent ? "trek-event" : ""
                        }`}
                    onClick={() => setSelectedDate(currentDate)}
                >
                    <span className="day-number">{i}</span>
                    {isTrekEvent && <p className="event-title">{filteredEvents.find((event) => event.date.toDateString() === currentDate.toDateString())?.title}</p>}
                </div>
            );
        }

        return calendar;
    };

    return (
        <div className="max-w-screen-xl mx-auto mt-8 flex">
            <div className="w-2/3 p-4">
                <h2 className="text-lg font-semibold mb-4">
                    {filteredEvents.length > 0 ? `Trek Events in ${selectedDate.toLocaleString("en-us", { month: "long", year: "numeric" })}` : "No Trek Events in Selected Month"}
                </h2>
                {filteredEvents.length > 0 ? (
                    <ul>
                        {filteredEvents.map((event, index) => (
                            <li key={index} className="mb-4">
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <p className="text-gray-500 mb-2">{event.date.toDateString()}</p>
                                <p className="text-gray-700">Duration: {event.duration}</p>
                                <p className="text-green-600">Price: ${event.price}</p>
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

export default TrekCalendar;
