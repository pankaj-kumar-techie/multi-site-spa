import React, {useEffect, useState} from "react";

export default function FirstHeroBanner(props: { data :any}) {
    const[bannerData,setBannerData] = useState<any>([])
    console.log('Hero Banner  child :', props.data);

    useEffect(() => {
        setBannerData(props.data);
    },[])

    return (
        <>
            {/*<div className="bg-[#FF6A3D] justify-center items-center px-4 text-xl rounded fixed">*/}
            {/*    Pankaj Kumar*/}
            {/*</div>*/}

            <section className="h-screen bg-fixed bg-cover w-full flex flex-col justify-center items-center "
                     style={{backgroundImage: `url(${bannerData?.banner})`}}>

                <div
                    className="flex h-full w-full items-center justify-center mx-auto px-8 backdrop-blur-sm hover:backdrop-blur-sm">

                    <div className="max-w-4xl text-center">
                        <div className="mb-4">
                            <img
                                // src={process.env.PUBLIC_URL + 'avatar.png'}
                                src={bannerData?.banner}
                                className="rounded-full w-32 mb-4 mx-auto"
                                alt="Avatar"
                            />
                        </div>
                        {/*<div*/}
                        {/*    className="bg-[#FF6A3D] px-4 text-xl rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 ">*/}
                        {/*    Software Engineer*/}
                        {/*</div>*/}
                        <h1 className="text-5xl font-extrabold text-white tracking-widest">{bannerData?.title}</h1>
                        <h3 className={"py-4 text-xl text-white col rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"}>{bannerData?.subTitle}</h3>
                        <div className="flex space-x-2 justify-center py-4">
                            <div>
                                <button type="button"
                                        className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                         className="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                              d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
