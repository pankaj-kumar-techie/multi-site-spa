import React, {useEffect, useState} from "react";

export default function FirstHeader(props: { data: any }) {
    const [headerData, setHeaderData] = useState<any>([])
    const classic = {
        section: "text-gray-600 body-font",
        backgroundColor: "bg-orange-200",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-gray-600 text-lg mb-6",
        imageWrapper: "hidden",
        bodyWrapper: "sm:w-1/2 sm:pl-16",
        aboutImage: "https://stackoverflow.co/img/product/teams/teams-integrations-spot.svg",
        aboutImageWrapper: "w-80 h-80  object-cover",
    };
    const modern = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
        imageWrapper: "absolute top-[-550px] z-0    left-[50%] h-[1500px] translate-x-[-50%]",
        bodyWrapper: "sm:w-1/2 z-[9] sm:pl-16",
        aboutImage: "	https://stackoverflow.co/img/product/home/bg-header-mobile.png",
        aboutImageWrapper: "w-80 z-50 h-80 rounded-full object-cover",

    };
    const plain = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const stack_left = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const stack_center = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const stack_right = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const fixed = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const transparent = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const split = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };


    const [headerTheme, setHeaderTheme] = useState<string>("")

    const styles = {
        Theme1: classic,
        Theme2: modern,
        Theme3: plain,
    }[headerTheme] || classic;

    useEffect(() => {
        setHeaderData(props.data);
        setHeaderTheme(props.data.theme || "Theme1")
    }, [props.data])

    return (
        <header className={styles.section}>
            <nav
                className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                data-te-navbar-ref="">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex items-center">
                        <button
                            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                            type="button"
                            data-te-collapse-init=""
                            data-te-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="[&>svg]:w-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7">
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </span>
                        </button>
                    </div>

                    <div
                        className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY"
                        data-te-collapse-item="">
                        <ul
                            className="mr-auto flex flex-col lg:flex-row"
                            data-te-navbar-nav-ref="">
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <a
                                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                    href="/"
                                    data-te-nav-link-ref=""
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >Home</a
                                >
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <a
                                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                    href="/"
                                    data-te-nav-link-ref=""
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                >Features</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}