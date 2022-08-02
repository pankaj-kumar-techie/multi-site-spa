import React from 'react';

export const Echo = (props: { data: any }) => {

    return (
        <>
            <div className="bg-gray-100">
                <section>
                    <p>{props.data.name}</p>
                </section>
            </div>
        </>


    );
}

export default Echo;
