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
        return <section className={`${theme.background.backgroundColor} container mx-auto px-4 mb-4`}>
            <TitleCover title={tacData.title} fontFamily="font-bold" />
            <div className="prose animate-pulse">
                <div className="h-8 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded w-5/6"></div>
            </div>
        </section>;
    }


    return (
        <section className={`${theme.background.backgroundColor} container mx-auto px-4 mb-4`}>
            <TitleCover title={tacData.title} fontFamily="font-bold" />
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
