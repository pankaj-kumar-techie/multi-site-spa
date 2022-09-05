import React from 'react';
import HeroBanner from "./hero-banner/HeroBanner";

export const Echo = (props: { data: any }) => {

    return (
        <>
            <div className="bg-gray-100">
                <section>
                    <p>{props.data.name}</p>
                </section>
                <HeroBanner></HeroBanner>

            </div>
        </>


    );
}

export default Echo;
