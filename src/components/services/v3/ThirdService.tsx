import React from "react";


    const styles1 = {
        section: "bg-red-500 py-24 sm:py-32",
        container: "mx-auto max-w-7xl px-6 lg:px-8",
        heading: "mx-auto max-w-2xl lg:text-center",
        headingText: "text-base font-semibold leading-7 text-indigo-600",
        title: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
        description: "mt-6 text-lg leading-8 text-gray-600",
        featureList: "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl",
        feature: "relative pl-16",
        featureTitle: "text-base font-semibold leading-7 text-gray-900",
        featureIcon: "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",
        featureDescription: "mt-2 text-base leading-7 text-gray-600",
        grid: "grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",
    };
    const styles2 = {
        section: "bg-blue-500 py-24 sm:py-32",
        container: "mx-auto max-w-7xl px-6 lg:px-8",
        heading: "mx-auto max-w-2xl lg:text-right",
        headingText: "text-base font-semibold leading-7 text-right",
        title: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
        description: "mt-6 text-lg leading-8 text-gray-600 text-right",
        featureList: "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl",
        feature: "relative pl-16",
        featureTitle: "text-base font-semibold leading-7 text-gray-900",
        featureIcon: "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600",
        featureDescription: "mt-2 text-base leading-7 text-gray-600",
        grid: "grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",
    };
const styles3 = {
    section: "bg-yellow-500 py-24 sm:py-32",
    container: "mx-auto max-w-7xl px-6 lg:px-8",
    heading: "mx-auto max-w-2xl lg:text-center",
    headingText: "text-base font-semibold leading-7 text-red-600",
    title: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
    description: "mt-6 text-lg leading-8 text-gray-600",
    featureList: "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl",
    feature: "relative pl-16",
    featureTitle: "text-base font-semibold leading-7 text-gray-900",
    featureIcon:
        "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600",
    featureDescription: "mt-2 text-base leading-7 text-gray-600",
    grid: "grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",
};
const styles4 = {
    section: "bg-green-500 py-24 sm:py-32",
    container: "mx-auto max-w-7xl px-6 lg:px-8",
    heading: "mx-auto max-w-2xl lg:text-center",
    headingText: "text-base font-semibold leading-7 text-purple-600",
    title: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
    description: "mt-6 text-lg leading-8 text-gray-600",
    featureList: "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl",
    feature: "relative pl-16",
    featureTitle: "text-base font-semibold leading-7 text-gray-900",
    featureIcon:
        "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600",
    featureDescription: "mt-2 text-base leading-7 text-gray-600",
    grid: "grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16",
};

function ThirdService(data: any) {
    let design = "Theme4"
    console.log("Theme is here : ", design)
    const styles = {
        Theme1: styles1,
        Theme2: styles2,
        Theme3: styles3,
        Theme4: styles4,
    }[design] || styles1;
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h2 className={styles.headingText}>Deploy faster</h2>
                        <p className={styles.title}>
                            Everything you need to deploy your app
                        </p>
                        <p className={styles.description}>
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                            Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                            at. In mi viverra elit nunc.
                        </p>
                    </div>
                    <div className={styles.featureList}>
                        <dl className={styles.grid}>
                            <div className={styles.feature}>
                                <dt className={styles.featureTitle}>
                                    <div className={styles.featureIcon}></div>
                                    Echo
                                </dt>
                                <dd className={styles.featureDescription}>{"Quis tellus eget adipiscing convallis sit sit eget aliquet quis.Suspendisse eget egestas a elementum pulvinar et feugiat blanditat. In mi viverra elit nunc."}</dd>
                            </div>
                            <div className={styles.feature}>
                                <dt className={styles.featureTitle}>
                                    <div className={styles.featureIcon}></div>
                                    Echo
                                </dt>
                                <dd className={styles.featureDescription}>{"Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.\n" +
                                    "\n" +
                                    "PREVIEW j"}</dd>
                            </div>
                            <div className={styles.feature}>
                                <dt className={styles.featureTitle}>
                                    <div className={styles.featureIcon}></div>
                                    Echo
                                </dt>
                                <dd className={styles.featureDescription}>{"Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.\n" +
                                    "\n" +
                                    "PREVIEW j"}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThirdService;
