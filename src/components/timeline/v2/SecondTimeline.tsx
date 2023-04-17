import React, {useEffect, useState} from "react";

export default function SecondTimeline(props: { data: any }) {
    const [timelineData, setTimelineData] = useState<any>([])
    console.log('Hero Banner  child :', props.data);

    useEffect(() => {
        setTimelineData(props.data);
    }, [props.data])
    return (
        <section>

            <div
                className="min-h-screen bg-blue-500 bg-fixed bg-blend-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 backdrop-blur-md-">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        <div
                            className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="block p-6 rounded-lg shadow-lg bg-gray-100">
                                            <div className="flex justify-between mb-4">
                                                <h1 className={"text-base text-base-600 font-semibold tracking-wide uppercase"}>EDUCATION</h1>

                                            </div>
                                            <p className="text-gray-700 mb-6">{timelineData?.title}Bachelor of Engineering in Information
                                                Technology .</p>
                                            <div className="flex justify-between mb-4">
                                                <a href="#!"
                                                   className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm ">Chandigarh
                                                    University</a>
                                                <a href="#!"
                                                   className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">2016-2020</a>
                                            </div>
                                            {/*<button type="button"*/}
                                            {/*        className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"*/}
                                            {/*        data-mdb-ripple="true">Preview*/}
                                            {/*</button>*/}
                                            {/*<button type="button"*/}
                                            {/*        className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"*/}
                                            {/*        data-mdb-ripple="true">See demo*/}
                                            {/*</button>*/}
                                        </div>
                                        {/*<div className="p-4 bg-white rounded shadow">*/}
                                        {/*    */}
                                        {/*    Now this is a story all about how,*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                                <div
                                    className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="block p-6 rounded-lg shadow-lg bg-gray-100">
                                            <div className="flex justify-between mb-4">
                                                <h1 className={"text-base text-base-600 font-semibold tracking-wide uppercase"}>industrial
                                                    training</h1>

                                            </div>
                                            <p className="text-gray-700 mb-6">Bachelor of Engineering in Information
                                                Technology .</p>
                                            <div className="flex justify-between mb-4">
                                                <a href="#!"
                                                   className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm ">A2IT
                                                    Online - Software Development Company
                                                </a>
                                                <a href="#!"
                                                   className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">2020</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div
                                    className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="block p-6 rounded-lg shadow-lg bg-gray-100">
                                            <div className="flex justify-between mb-4">
                                                <h1 className={"text-base text-base-600 font-semibold tracking-wide uppercase"}>WORK
                                                    EXPERIENCE
                                                </h1>

                                            </div>
                                            <p className="text-gray-700 mb-6"> Working as Software Engineer with good
                                                knowledge of front-end and back-end techniques, include design,
                                                maintain, modify and debug software.</p>
                                            <div className="flex justify-between mb-4">
                                                <a href="#!"
                                                   className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm ">Carvia
                                                    Technologies
                                                </a>
                                                <a href="#!"
                                                   className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">2020-Present</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div
                                    className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 bg-white rounded shadow">
                                            Looking for Knock.
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*<div className="mt-6 sm:mt-0 sm:mb-12">*/}
                        {/*    <div className="flex flex-col sm:flex-row items-center">*/}
                        {/*        <div className="flex justify-start w-full mx-auto items-center">*/}
                        {/*            <div className="w-full sm:w-1/2 sm:pr-8">*/}
                        {/*                <div className="p-4 bg-white rounded shadow">*/}
                        {/*                    Now this is a story all about how,*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">*/}
                        {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"*/}
                        {/*                 viewBox="0 0 24 24" stroke="currentColor">*/}
                        {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="mt-6 sm:mt-0 sm:mb-12">*/}
                        {/*    <div className="flex flex-col sm:flex-row items-center">*/}
                        {/*        <div className="flex justify-start w-full mx-auto items-center">*/}
                        {/*            <div className="w-full sm:w-1/2 sm:pr-8">*/}
                        {/*                <div className="p-4 bg-white rounded shadow">*/}
                        {/*                    And I'd like to take a minute, just sit right there,*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">*/}
                        {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"*/}
                        {/*                 viewBox="0 0 24 24" stroke="currentColor">*/}
                        {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="mt-6 sm:mt-0">*/}
                        {/*    <div className="flex flex-col sm:flex-row items-center">*/}
                        {/*        <div className="flex justify-end w-full mx-auto items-center">*/}
                        {/*            <div className="w-full sm:w-1/2 sm:pl-8">*/}
                        {/*                <div className="p-4 bg-white rounded shadow">*/}
                        {/*                    I'll tell you how I became the Prince of a town called Bel Air.*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">*/}
                        {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"*/}
                        {/*                 viewBox="0 0 24 24" stroke="currentColor">*/}
                        {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>

                </div>
            </div>
        </section>

    )
}
