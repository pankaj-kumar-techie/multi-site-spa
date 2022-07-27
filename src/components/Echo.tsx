import React from 'react';

export const  Echo = (props: {data: any}) =>{

    return (
        <div className="bg-gray-100">
            <section>
                <p>{props.data}</p>
            </section>
        </div>

    );
}

export default Echo;
