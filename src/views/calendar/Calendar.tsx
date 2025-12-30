import React from "react";

interface CalendarProps {
    data: any;
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
    const events = data?.calendar || [];

    return (
        <section id="calendar" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                        {data.subTitle || "Events"}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
                        {data.title || "Mark Your Calendar"}
                    </h3>
                    <p className="text-lg text-slate-600">
                        {data.description || "Join us for our upcoming workshops, seminars, and community meetups."}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {events.map((event: any, index: number) => (
                        <div
                            key={event.id || index}
                            className="group flex flex-col md:flex-row gap-8 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">May</span>
                                    <span className="text-4xl font-black text-slate-900">{(15 + index).toString().padStart(2, '0')}</span>
                                </div>
                            </div>

                            <div className="flex-grow flex flex-col justify-center">
                                <div className="flex items-center gap-3 text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    10:00 AM - 04:00 PM
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {event.name}
                                </h4>
                                <p className="text-slate-500 leading-relaxed max-w-xl">
                                    {event.description}
                                </p>
                            </div>

                            <div className="flex items-center">
                                <button className="px-8 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-primary-600 transition-all active:scale-95 shadow-lg group-hover:shadow-primary-600/20">
                                    Reserve Spot
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Calendar;


