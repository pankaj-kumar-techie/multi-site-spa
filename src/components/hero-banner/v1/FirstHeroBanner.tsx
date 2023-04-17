import React, {useEffect, useState} from "react";

export default function FirstHeroBanner(props: { data: any }) {
    const [bannerData, setBannerData] = useState<any>([])
    console.log('Hero Banner  child :', props.data);

    useEffect(() => {
        setBannerData(props.data);
    }, [props.data])

    return (
        <section className="h-screen bg-fixed bg-cover w-full flex flex-col justify-center items-center "
                 style={{backgroundImage: `url(${bannerData?.banner})`}}>
            <div className="bg-gray-800 py-12">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-500 font-semibold tracking-wide uppercase">
                            Welcome to my website
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                            This is the hero banner
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                            Here you can add a brief description about your website or your product
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
                            <div className="rounded-md shadow">
                                <a
                                    href="/echo"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Call to action
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div*/}
            {/*    className="flex h-full w-full items-center justify-center mx-auto px-8 backdrop-blur-sm hover:backdrop-blur-sm">*/}

            {/*    <div className="max-w-4xl text-center">*/}
            {/*        <div className="mb-4">*/}
            {/*            <img*/}
            {/*                // src={process.env.PUBLIC_URL + 'avatar.png'}*/}
            {/*                src={bannerData?.banner}*/}
            {/*                className="rounded-full w-32 mb-4 mx-auto"*/}
            {/*                alt="Avatar"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        /!*<div*!/*/}
            {/*        /!*    className="bg-[#FF6A3D] px-4 text-xl rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 ">*!/*/}
            {/*        /!*    Software Engineer*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        <h1 className="text-5xl font-extrabold text-white tracking-widest">{bannerData?.title}</h1>*/}
            {/*        <h3 className={"py-4 text-xl text-white col rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"}>{bannerData?.subTitle}</h3>*/}
            {/*        <div className="flex space-x-2 justify-center py-4">*/}
            {/*            <div>*/}
            {/*                <button type="button"*/}
            {/*                        className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">*/}
            {/*                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"*/}
            {/*                         className="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                         viewBox="0 0 512 512">*/}
            {/*                        <path fill="currentColor"*/}
            {/*                              d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">*/}
            {/*                        </path>*/}
            {/*                    </svg>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </section>
    )
}
