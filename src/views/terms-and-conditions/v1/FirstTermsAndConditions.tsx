import React, { useContext, useEffect, useState } from 'react';
import TitleCover from '../../../components/common/title-cover/TitleCover';
import { ThemeContext } from '../../../themes/ThemeProvider';
import { TermAndCondition } from '../../../modal/Section';
import SectionShimmer from '../../../components/common/shimmer/SectionShimmer';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';

const FirstTermsAndConditions = (props: { data: any }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [tacData, setTacData] = useState<any>({
        title: '',
        description: '',
        termAndCondition: [],
    });

    useEffect(() => {
        setTacData(props.data);
    }, [props.data]);

    if (!tacData.termAndCondition) {
        return <SectionShimmer title={tacData.title}></SectionShimmer>;
    }
    return (
        <section className={`bg-${theme.colors.primary} container mx-auto px-4`}>
            <TitleCover title={tacData.title} titleColor={`${textColor}`} fontFamily="font-bold" />
            <div className="prose text-center">
                {tacData.termAndCondition.map((tac: TermAndCondition) => (
                    <div key={tac.id}>
                        <h3 className={textColor}>{tac.title}</h3>
                        <p className={textColor}>{tac.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FirstTermsAndConditions;
