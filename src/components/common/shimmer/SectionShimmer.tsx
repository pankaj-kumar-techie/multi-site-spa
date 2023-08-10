import React, { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeProvider';
import TitleCover from '../../../components/common/title-cover/TitleCover';
import CardShimmer from './CardShimmer';

interface SectionShimmerProps {
    title: string;
}

const SectionShimmer: React.FC<SectionShimmerProps> = ({ title }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${theme.background.backgroundColor} container mx-auto px-4 mb-4`}>
            <TitleCover title={title} fontFamily="font-bold" />
            <div className="prose animate-pulse">
                <CardShimmer />
            </div>
        </section>
    );
};

export default SectionShimmer;
