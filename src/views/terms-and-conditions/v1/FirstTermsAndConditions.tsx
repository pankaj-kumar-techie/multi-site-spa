import React, { useContext, useEffect, useState } from 'react';
import TitleCover from '../../../components/common/title-cover/TitleCover';
import { ThemeContext } from '../../../themes/ThemeProvider';
import { TermAndCondition } from '../../../modal/Section';

const FirstTermsAndConditions = (props: { data: any }) => {
    const { theme } = useContext(ThemeContext);
    const [tacData, setTacData] = useState<any>({
        title: '',
        description: '',
        termAndCondition: [],
    });

    useEffect(() => {
        setTacData(props.data);
    }, [props.data]);

    if (!tacData.termAndCondition) {
        return <p>Loading...</p>;
    }


    return (
        <section className={`${theme.background.backgroundColor} container mx-auto px-4 mb-4`}>
            <TitleCover title="Terms and Conditions" fontFamily="font-bold" />
            <div className="prose">
                {tacData.termAndCondition.map((tac: TermAndCondition) => (
                    <div key={tac.id}>
                        <h3>{tac.title}</h3>
                        <p>{tac.description}</p>
                        <p>{tac.descriptionContext}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FirstTermsAndConditions;
