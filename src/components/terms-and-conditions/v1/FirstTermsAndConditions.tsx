import React from 'react';

const FirstTermsAndConditions = (props: { data: any }) => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <div className="prose">
                <h3>Introduction</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est non nunc accumsan
                    efficitur.
                    Aliquam erat volutpat. Sed sollicitudin, tortor in efficitur euismod, justo sapien ultrices ante, id
                    varius
                    purus arcu in nunc. In hac habitasse platea dictumst.
                </p>
                <h3>General Terms</h3>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vivamus eu
                    ligula eget mi finibus congue at eu lacus. Etiam hendrerit sapien vel odio lobortis malesuada.
                    Integer non
                    vulputate urna, id fringilla ipsum. Phasellus ut lectus a massa molestie viverra at et odio.
                </p>
                <h3>Payment</h3>
                <p>
                    Aliquam vel tincidunt risus, non blandit nunc. Integer blandit nunc ut nunc ultricies, vitae
                    eleifend tortor
                    ultrices. In nec arcu nulla. Fusce nec elementum turpis. Nam eu libero sollicitudin, interdum purus
                    id,
                    fermentum dolor. Morbi et mi dignissim, interdum nunc at, euismod arcu.
                </p>
                <h3>Disclaimer</h3>
                <p>
                    Curabitur eget tristique tellus. Fusce sed est neque. Morbi semper eleifend nunc eget rutrum. Donec
                    auctor
                    lectus vitae mauris blandit, ac tincidunt ante bibendum. Sed a risus eu enim lacinia consequat non
                    in sem.
                </p>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default FirstTermsAndConditions;
